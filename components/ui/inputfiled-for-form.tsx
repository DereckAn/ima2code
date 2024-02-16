interface InputFieldProps {
  label: string;
  type: string;
  name: string;
  placeholder?: string;
  onChange: (e: any) => void;
}

const InputField = ({ label, type, name, placeholder, onChange }: InputFieldProps) => {
  return (
    <label className="block mb-4">
      <span className="text-white">{label}:</span>
      <input
        className="mt-1  w-full rounded-md border-gray-300 shadow-sm"
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
      />
    </label>
  );
};

export default InputField;
