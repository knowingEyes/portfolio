const Textarea = ({ placeholder, className = "", label }) => (
  <div>
    <label className="label">{label}</label>
    <textarea
      placeholder={placeholder}
      rows="5"
      className={`input-class ${className}`}
    />
  </div>
);
export default Textarea;
