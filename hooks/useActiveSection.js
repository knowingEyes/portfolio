import { useEffect, useState } from "react";

// const useActiveSection = () => {
//   const [activeSec, setActiveSec] = useState(null);

//   useEffect(() => {
//     let isInitialLoad = true;

//     // Allow browser to restore scroll position on browser first
//     requestAnimationFrame(() => requestAnimationFrame(()=>(isInitialLoad = false)));

//     const hashChange = () => setActiveSec(window.location.hash || "#home");

//     window.addEventListener("hashchange", hashChange);

//     // Set a hash if there isn't any active section
//     if (!activeSec) hashChange();

//     const sections = document.querySelectorAll("section[id]");
//     const observer = new IntersectionObserver(
//       (entries) => {
//         if (isInitialLoad) return;
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             window.history.replaceState(null, null, `#${entry.target.id}`);
//           }
//         });
//         hashChange();
//       },
//       { threshold: [0.25, 0.5, 0.75, 1] }
//     );

//     sections.forEach((section) => observer.observe(section));

//     return () => {
//       observer.disconnect();
//       window.removeEventListener("hashchange", hashChange);
//     };
//   }, []);

//   return activeSec;
// };

export const useActiveSection = () => {
  const [activeSec, setActiveSec] = useState(null);

  useEffect(() => {
    // Helper to update state if hash changes
    const handleHashChange = () =>
      setActiveSec(window.location.hash || "#home");
    window.addEventListener("hashchange", handleHashChange);

    // Select all sections with IDs once
    const sections = document.querySelectorAll("section[id]");

    // Use a flag to prevent observer from firing immediately on load
    let initialLoad = true;

    // Small delay to let mobile browsers restore scroll / layout
    requestAnimationFrame(() =>
      requestAnimationFrame(() => {
        initialLoad = false;
      })
    );

    const observer = new IntersectionObserver(
      (entries) => {
        if (initialLoad) return; // skip initial load

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const newHash = `#${entry.target.id}`;
            if (activeSec !== newHash) {
              window.history.replaceState(null, null, newHash);
              setActiveSec(newHash);
            }
          }
        });
      },
      { threshold: [0.25, 0.5, 0.75, 1] }
    );

    sections.forEach((section) => observer.observe(section));

    // Cleanup
    return () => {
      observer.disconnect();
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, [activeSec]);

  return activeSec;
};

export { useActiveSection };
