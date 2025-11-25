const SectionLabel = ({ children }) => (
  <div className="flex items-center space-x-2 mb-6">
    <span className="text-primary-500/80 font-mono text-xs">//</span>
    <h3 className="text-xs font-mono text-primary-400 uppercase tracking-[0.2em]">
      {children}
    </h3>
  </div>
);
export default SectionLabel;