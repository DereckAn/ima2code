"use client";
import CreateUserForm from "@/components/ui/create-user-orm";
import LoginForm from "@/components/ui/login-form";
import { useState } from "react";

const CreateUserPage = () => {
  const [isLogin, setIsLogin] = useState(false);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const handleFetchData = async () => {
    try {
      const response = await fetch(
        process.env.REACT_APP_API_URL_BASE + "/users"
      );
      const data = await response.json();

      console.log(data);

      return {
        props: {
          userData: data,
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
      <h1 className="mb-6 text-5xl font-bold">
        {isLogin ? "Login Page" : "Create User Page"}
      </h1>

      {isLogin ? <LoginForm /> : <CreateUserForm />}

      <button onClick={toggleForm} className="p-10">
        {isLogin ? "Switch to Create User" : "Switch to Login"}
      </button>

      <button className="p-10" onClick={handleFetchData}>
        Fetch Data
      </button>
    </section>
  );
};

export default CreateUserPage;
