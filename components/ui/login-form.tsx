import { useEffect, useState } from "react";
import InputField from "./inputfiled-for-form";

interface LoginFormProps {
  setLoggedInUser: (user: string) => void;
}

const LoginForm = ({setLoggedInUser} : LoginFormProps) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  // const [loggedInUser, setLoggedInUser] = useState<string | null>(null);
  let success = true;

  // useEffect(() => {
  //   const storedUser = window.sessionStorage.getItem("email");
  //   if (storedUser) {
  //     setLoggedInUser(storedUser);
  //   }
  // }, []);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    let errorText = "";
    const payload = JSON.stringify({
      email: email,
      password: pass,
    });
    try {
      fetch(process.env.NEXT_PUBLIC_REACT_APP_API_URL_BASE + "/login/", {
        method: "POST",
        body: payload,
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => {
          if (!res.ok) {
            errorText = "Error: " + res.status;
            success = false;
            return res.json();
          } else {
            success = true;
            return res.json();
          }
        })
        .then((data) => {
          if (!success) {
            for (const err in data.errors) {
              for (const msg in data.errors[err])
                errorText += data.errors[err][msg];
            }
            console.log(errorText);
          } else {
            window.sessionStorage.setItem("auth", "true");
            window.sessionStorage.setItem("user_id", data.user_id);
            window.sessionStorage.setItem("token", data.token);
            window.sessionStorage.setItem("email", data.email);
            window.sessionStorage.setItem("first_name", data.first_name);
            setLoggedInUser(data.first_name);
          }
        })
        .catch((error) => {
          success = false;
          console.error(error);
        });
      if (success) {
        setEmail("");
        setPass("");
        alert("Logged In Successfully!");
        //Navigate to User Page
      } else {
        alert(errorText);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <form
        className="p-6 bg-secondary rounded-xl shadow-md"
        onSubmit={handleSubmit}
      >
        <InputField
          label="Email"
          type="email"
          name="email"
          placeholder="email@email.com"
          onChange={(e) => setEmail(e.target.value)}
        />
        <InputField
          label="Password"
          type="password"
          name="password"
          placeholder="password"
          onChange={(e) => setPass(e.target.value)}
        />
        <input
          className="w-full px-3 py-2 text-white bg-tertiary rounded hover:bg-blue-700"
          type="submit"
          value={"Submit"}
        />
      </form>
    </div>
  );
};

export default LoginForm;
