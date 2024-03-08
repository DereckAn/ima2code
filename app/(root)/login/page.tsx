"use client";
import CreateUserForm from "@/components/ui/create-user-orm";
import LoginForm from "@/components/ui/login-form";
import { useState } from "react";

const CreateUserPage = () => {
  const [isLogin, setIsLogin] = useState(false);

  const toggleForm = () => {
    setIsLogin(!isLogin);
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
    </section>
  );
};

export default CreateUserPage;
