const baseStyle =
  "inline-flex items-center justify-center rounded-md text-xs font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary-500 disabled:opacity-50 tracking-wide";

const Button = ({
  children,
  onClick,
  variant = "default",
  className = "",
  href,
  ...props
}) => {
  let variantStyle;

  switch (variant) {
    case "outline":
      variantStyle =
        "border border-gray-800 bg-gray-950/50 text-gray-300 hover:text-white hover:border-primary-500/50 hover:bg-primary-500/10 hover:shadow-[0_0_15px_rgba(59,130,246,0.15)]";
      break;
    case "ghost":
      variantStyle = "text-gray-400 hover:text-white hover:bg-gray-800/50";
      break;
    case "link":
      variantStyle =
        "text-primary-400 p-0 hover:text-primary-300 underline-offset-4 hover:underline";
      break;
    default:
      // Primary with subtle glow
      variantStyle =
        "bg-primary-600 text-white hover:bg-primary-500 shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] border border-primary-500/20";
  }

  const Tag = href ? "a" : "button";

  return (
    <Tag
      href={href}
      onClick={onClick}
      className={`${baseStyle} ${variantStyle} px-5 py-2.5 cursor-pointer ${className}`}
      {...props}
    >
      {children}
    </Tag>
  );
};

export default Button;
