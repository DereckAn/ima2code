interface InputFieldProps {
  label: string;
  type: string;
  name: string;
  onChange: (e: any) => void;
}

const InputField = ({ label, type, name }: InputFieldProps) => {
  return (
    <label className="block mb-4">
      <span className="text-white">{label}:</span>
      <input
        className="mt-1  w-full rounded-md border-gray-300 shadow-sm"
        type={type}
        name={name}
      />
    </label>
  );
};

export default InputField;
