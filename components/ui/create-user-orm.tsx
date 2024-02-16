import InputField from "./inputfiled-for-form";
interface InputFieldProps {
  onChange: (e: any) => void;
}

const CreateUserForm = ({ onChange }: InputFieldProps) => {
  return (
    <form className="p-6 bg-secondary rounded-xl shadow-md" onSubmit={onChange}>
      <InputField label="Email" type="email" name="email" onChange={onChange} />
      <InputField
        label="Password"
        type="password"
        name="password"
        onChange={onChange}
      />
      <input
        className="w-full px-3 py-2 text-white bg-blue-600 rounded hover:bg-blue-700"
        type="submit"
        value={"Submit"}
      />
    </form>
  );
};

export default CreateUserForm;
