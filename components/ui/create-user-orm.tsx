import { useState } from "react";
import InputField from "./inputfiled-for-form";
interface CreateUserFormProps {
  setLoggedInUser: (user: string) => void;
}

const CreateUserForm = ({ setLoggedInUser }: CreateUserFormProps) => {
  const [form, setForm] = useState({
    email: "",
    pass: "",
    passConfirm: "",
    firstName: "",
    lastName: "",
    error: null as string | null,
  });

  const handleChange = (e: any) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: any) => {
    if (
      !form.email ||
      !form.pass ||
      !form.passConfirm ||
      !form.firstName ||
      !form.lastName
    ) {
      setForm({
        ...form,
        error: "All fields must be filled out",
      });
      alert("All fields must be filled out");
      return;
    }

    if (form.pass !== form.passConfirm) {
      alert("Password and password confirmation do not match");
      return;
    }

    const payload = JSON.stringify({
      first_name: form.firstName,
      last_name: form.lastName,
      email: form.email,
      password: form.pass,
    });

    try {
      const res = await fetch(
        process.env.NEXT_PUBLIC_REACT_APP_API_URL_BASE + "/users/",
        {
          method: "POST",
          body: payload,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!res.ok) {
        const data = await res.json();
        alert("Error: " + data.message);
      } else {
        setForm({
          email: "",
          pass: "",
          passConfirm: "",
          firstName: "",
          lastName: "",
          error: "User created successfully!",
        });
        alert("User created successfully!");
      }
    } catch (error) {
      alert("Error Registering - Check your information and try again");
    }
  };

  return (
    <form
      className="p-6 bg-secondary rounded-xl shadow-md "
      onSubmit={handleSubmit}
    >
      <InputField
        label="Firstname"
        type="text"
        name="firstName"
        placeholder="Firstname"
        error={!form.firstName}
        onChange={handleChange}
      />
      <InputField
        label="Lastname"
        type="text"
        name="lastName"
        placeholder="Lastname"
        onChange={handleChange}
        error={!form.lastName}
      />
      <InputField
        label="Email"
        type="email"
        name="email"
        placeholder="email@email.com"
        error={!form.email}
        onChange={handleChange}
      />
      <InputField
        label="Password"
        type="password"
        name="pass"
        placeholder="Password"
        error={!form.pass || form.pass !== form.passConfirm}
        onChange={handleChange}
      />
      <InputField
        label="Confirm Password"
        type="password"
        name="passConfirm"
        placeholder="Confirm Password"
        error={!form.passConfirm || form.pass !== form.passConfirm}
        onChange={handleChange}
      />
      <input
        className="w-full px-3 py-2 text-white bg-tertiary  rounded hover:bg-blue-700"
        type="submit"
        value={"Submit"}
      />
    </form>
  );
};

export default CreateUserForm;
