"use client";
import { useState } from "react";

const CreateUserPage = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const response = await fetch("https://your-api-endpoint.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      // Handle successful response
    } else {
      // Handle error
    }
  };

  return (
    <section className="flex flex-col items-center justify-center min-h-screen ">
      <h1 className="mb-6 text-3xl font-bold text-gray-900">
        Create User Page
      </h1>
      <form className="p-6 bg-white rounded shadow-md" onSubmit={handleSubmit}>
        <InputField
          label="Firstname"
          type="text"
          name="fullname"
          onChange={handleChange}
        />
        <InputField
          label="Lastname"
          type="text"
          name="lastname"
          onChange={handleChange}
        />
        <InputField
          label="Email"
          type="email"
          name="email"
          onChange={handleChange}
        />
        <InputField
          label="Password"
          type="password"
          name="password"
          onChange={handleChange}
        />
        <InputField
          label="Confirm Password"
          type="password"
          name="confirmPassword"
          onChange={handleChange}
        />
        <input
          className="w-full px-3 py-2 text-white bg-blue-600 rounded hover:bg-blue-700"
          type="submit"
          value="Submit"
        />
      </form>
    </section>
  );
};

interface InputFieldProps {
  label: string;
  type: string;
  name: string;
  onChange: (e: any) => void;
}

const InputField = ({ label, type, name }: InputFieldProps) => (
  <label className="block mb-4">
    <span className="text-gray-700">{label}:</span>
    <input
      className="mt-1  w-full rounded-md border-gray-300 shadow-sm"
      type={type}
      name={name}
    />
  </label>
);

export default CreateUserPage;
