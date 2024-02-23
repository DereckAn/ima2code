import { useState } from "react";
import InputField from "./inputfiled-for-form";

const CreateUserForm = () => {
  const [form, setForm] = useState({
    email: "",
    pass: "",
    passConfirm: "",
    firstName: "",
    lastName: "",
    error: null as string | null,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: any) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ ...form, error: null });

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
      return;
    }

    if (form.pass !== form.passConfirm) {
      setForm({
        ...form,
        error: "Password and password confirmation do not match",
      });
      return;
    }

    const payload = JSON.stringify({
      first_name: form.firstName,
      last_name: form.lastName,
      email: form.email,
      password: form.pass,
    });

    try {
      const res = await fetch("http://localhost:8000/users/", {
        method: "POST",
        body: payload,
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) {
        const data = await res.json();
        const errorText = Object.values(data.errors).flat().join(" ");
        setForm({ ...form, error: errorText });
      } else {
        setForm({
          email: "",
          pass: "",
          passConfirm: "",
          firstName: "",
          lastName: "",
          error: "Registered Successfully!",
        });
      }
    } catch (error) {
      setForm({
        ...form,
        error: "Error Registering - Check your information and try again",
      });
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
        error={submitted && !form.firstName} 
        onChange={handleChange}
      />
      <InputField
        label="Lastname"
        type="text"
        name="lastName"
        placeholder="Lastname"
        onChange={handleChange}
        error={submitted && !form.firstName} 
      />
      <InputField
        label="Email"
        type="email"
        name="email"
        placeholder="email@email.com"
        error={submitted && !form.firstName} 
        onChange={handleChange}
      />
      <InputField
        label="Password"
        type="password"
        name="pass"
        placeholder="Password"
        error={submitted && !form.firstName} 
        onChange={handleChange}
      />
      <InputField
        label="Confirm Password"
        type="password"
        name="passConfirm"
        placeholder="Confirm Password"
        error={submitted && !form.firstName} 
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
