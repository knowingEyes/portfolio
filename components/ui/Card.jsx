const Card = ({ children, className = "", hoverEffect = true }) => (
  <div
    className={`relative overflow-hidden bg-gray-900/40 backdrop-blur-sm border border-gray-800 rounded-xl p-6 transition-all duration-500 ${
      hoverEffect
        ? "hover:border-primary-500/30 hover:shadow-2xl hover:shadow-primary-900/20 hover:-translate-y-1 group"
        : ""
    } ${className}`}
  >
    {children}
  </div>
);

export default Card;
