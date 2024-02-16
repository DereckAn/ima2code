"use client";
import CreateUserForm from "@/components/ui/create-user-orm";
import LoginForm from "@/components/ui/login-form";
import { useState } from "react";

const CreateUserPage = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [apiData, setApiData] = useState(null);
  const [isLogin, setIsLogin] = useState(false);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    fetch("http://127.0.0.1:8000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        first_name: formData.fullname,
        last_name: formData.lastname,
        email: formData.email,
        password: formData.password,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          const message = `An error has occured: ${response.status}`;
          throw new Error(message);
        }
        // Handle successful response...
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleFetchData = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/users");
      const data = await response.json();

      // Aquí puedes procesar los datos recibidos (por ejemplo, mostrarlos en tu página).
      console.log(data);

      return {
        props: {
          userData: data, // Pasa los datos a tu componente
        },
      };
    } catch (error) {
      console.error("Error al obtener los datos:", error);
      return {
        props: {
          userData: null,
        },
      };
    }
  };

  return (
    <section className="flex flex-col items-center justify-center min-h-screen ">
      <h1 className="mb-6 text-3xl font-bold">
        {isLogin ? "Login Page" : "Create User Page"}
      </h1>

      {isLogin ? (
        <LoginForm onChange={handleChange} />
      ) : (
        <CreateUserForm onChange={handleChange} />
      )}

      <button onClick={toggleForm} className="p-10">
        {isLogin ? "Switch to Create User" : "Switch to Login"}
      </button>

      <button className="p-10" onClick={handleFetchData}>
        Fetch Data
      </button>
      {apiData && <pre>{JSON.stringify(apiData, null, 2)}</pre>}
    </section>
  );
};


export default CreateUserPage;
