const SectionSubtitle = ({ children, className }) => {
  return (
    <p className={` text-gray-400 font-light mb-8 ${className}`}>
      {children}
    </p>
  );
};

export default SectionSubtitle;
