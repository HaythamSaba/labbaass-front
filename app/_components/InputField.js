function InputField({
  id,
  name,
  label,
  value,
  defaultValue,
  onChange,
  type = "text",
  placeholder,
  className,
  requiredStar = false, // new prop
}) {
  return (
    <div className={`flex flex-col gap-2 w-1/2 mb-4 ${className}`}>
      <label className="text-base font-medium flex items-center" htmlFor={id}>
        {label}
        {requiredStar && <span className="text-red-500 ml-1">*</span>}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full font-normal text-[#161F2C] border border-gray-300 p-4 rounded-lg focus:outline-primary-400 focus:shadow-lg ${className}`}
      />
    </div>
  );
}

export default InputField;
