"use client";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const AOSProvider = ({ children }) => {
  useEffect(() => {
    Aos.init({
      duration: 800,
      easing: "ease-out",
      once: true,
    });
  }, []);
  return children;
};

export default AOSProvider;
