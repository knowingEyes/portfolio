const Card = ({ children, className = "", hoverEffect = true, ...props }) => (
  <div
    data-aos="fade"
    className={`relative overflow-hidden bg-gray-900/40 backdrop-blur-sm border border-gray-800 rounded-xl p-6 transition-all! duration-500 hover:border-white group${
      hoverEffect
        ? "hover:border-primary-500/30 hover:shadow-2xl hover:shadow-black/20 hover:-translate-y-1 group active:border-primary-500/30 active:shadow-2xl active:shadow-black/20 active:-translate-y-1"
        : ""
    } ${className}`}
    {...props}
  >
    {children}
  </div>
);

export default Card;
