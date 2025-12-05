const Textarea = ({ placeholder, className = "", label, ...props }) => (
  <div>
    <label className="label">{label}</label>
    <textarea
      placeholder={placeholder}
      rows="5"
      className={`input-class ${className}`}
      {...props}
    />
  </div>
);
export default Textarea;
