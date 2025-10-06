export default function InputBar({
  children,
  placeholder,
  classes,
  value,
  handleChange,
  id = "",
  name = "",
  type = "text",
}) {
  return (
    <div className={`flex items-center rounded-md  px-4 py-2 ${classes}`}>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        className="mr-8 w-full focus:outline-none "
        id={id}
        name={name}
      />
      {children}
    </div>
  );
}
  