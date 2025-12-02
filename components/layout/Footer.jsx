const Footer = () => (
  <footer className="bg-gray-950 py-16 border-t border-gray-900">
    <div className="max-w-6xl mx-auto px-4 text-center">
      <div className="mb-8 flex justify-center space-x-8">
        {["GitHub", "Twitter"].map((social) => (
          <a
            key={social}
            href="#"
            className="text-gray-500 hover:text-primary-400 transition-colors text-xs uppercase tracking-widest"
          >
            {social}
          </a>
        ))}
      </div>
      <p className="text-gray-700 text-[10px] font-mono uppercase tracking-widest">
        &copy; {new Date().getFullYear()} AI_Dev. Engineered in Next.js.
      </p>
    </div>
  </footer>
);
export default Footer;
