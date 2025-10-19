function SelectField({ id, name, label, value, onChange, options,defaultValue }) {
  return (
    <div className="flex flex-col gap-4 w-1/2 mb-8">
      <label className="text-base font-medium" htmlFor={id}>
        {label}
      </label>
      <div className="flex items-center w-full h-14 md:h-16 p-4 rounded-lg border border-gray-300">
        <select
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          defaultValue={defaultValue}
          className="w-full font-normal text-[#161F2C] border-none focus:outline-none"
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default SelectField;
