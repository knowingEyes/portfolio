const Input = ({
  type = "text",
  placeholder,
  className = "",
  label,
  ...props
}) => (
  <div className={className}>
    <label className="label">{label}</label>
    <input
      type={type}
      placeholder={placeholder}
      className={`input-class`}
      {...props}
    />
  </div>
);

export default Input;
