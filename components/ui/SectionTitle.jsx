const SectionTitle = ({ children, className }) => {
  return (
    <h2 className={`text-3xl font-bold text-white mb-8 tracking-tight  ${className}`}>
      {children}
    </h2>
  );
};

export default SectionTitle;
