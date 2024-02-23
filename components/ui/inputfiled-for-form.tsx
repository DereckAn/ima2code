interface InputFieldProps {
  label: string;
  type: string;
  name: string;
  placeholder?: string;
  onChange: (e: any) => void;
  error?: boolean; // Add this line
}

const InputField = ({ label, type, name, placeholder, onChange, error }: InputFieldProps) => {
  return (
    <label className="block mb-4">
      <span className="text-white">{label}:</span>
      <input
        className={`mt-1 w-full rounded-md shadow-sm ${error ? 'border-red-500' : 'border-gray-300'}`}
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
      />
    </label>
  );
};

export default InputField;
