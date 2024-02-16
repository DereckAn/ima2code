import InputField from "./inputfiled-for-form";
interface InputFieldProps {
  onChange: (e: any) => void;
}

const LoginForm = ({ onChange }: InputFieldProps) => {
  return (
    <form className="p-6 bg-secondary rounded-xl shadow-md " onSubmit={onChange}>
      <InputField
        label="Firstname"
        type="text"
        name="fullname"
        onChange={onChange}
      />
      <InputField
        label="Lastname"
        type="text"
        name="lastname"
        onChange={onChange}
      />
      <InputField label="Email" type="email" name="email" onChange={onChange} />
      <InputField
        label="Password"
        type="password"
        name="password"
        onChange={onChange}
      />
      <InputField
        label="Confirm Password"
        type="password"
        name="confirmPassword"
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

export default LoginForm;
