"use client";
import CreateUserForm from "@/components/ui/create-user-orm";
import LoginForm from "@/components/ui/login-form";
import Link from "next/link";
import { useEffect, useState } from "react";

const CreateUserPage = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState<string | null>(null);

  useEffect(() => {
    const storedUser = window.sessionStorage.getItem("first_name");
    if (storedUser) {
      setLoggedInUser(storedUser);
    }
  }, []);

  const handleLogout = () => {
    window.sessionStorage.removeItem("auth");
    window.sessionStorage.removeItem("user_id");
    window.sessionStorage.removeItem("token");
    window.sessionStorage.removeItem("email");
    window.sessionStorage.removeItem("first_name");
    setLoggedInUser(null);
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <section className="flex flex-col items-center justify-center min-h-screen ">
      {loggedInUser ? (
        <div className="flex flex-col items-center justify-center gap-5">
          <h1 className="text-5xl flex flex-col ">
            Hello!! <span className="text-fourth">{loggedInUser}</span>{" "}
          </h1>
          <button
            onClick={handleLogout}
            className="w-full max-w-xl px-3 py-2 text-white bg-tertiary  rounded hover:bg-blue-700"
          >
            Logout
          </button>
        </div>
      ) : (
        <>
          <h1 className="mb-6 text-5xl font-bold">
            {isLogin ? "Login Page" : "Create User Page"}
          </h1>
          {isLogin ? (
            <LoginForm setLoggedInUser={setLoggedInUser} />
          ) : (
            <CreateUserForm setLoggedInUser={setLoggedInUser}/>
          )}
          <button onClick={toggleForm} className="p-10">
            {isLogin ? "Switch to Create User" : "Switch to Login"}
          </button>
        </>
      )}
    </section>
  );
};

export default CreateUserPage;
