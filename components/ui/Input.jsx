const Input = ({
  type = "text",
  placeholder,
  className = "",
  label,
  ...props
}) => (
  <div>
    <label className="label">{label}</label>
    <input
      type={type}
      placeholder={placeholder}
      className={`input-class ${className}`}
      {...props}
    />
  </div>
);

export default Input;
