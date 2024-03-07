import { useState } from "react";
import InputField from "./inputfiled-for-form";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setSubmitted(true); 
    setError(null);
    let success = true;
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
            errorText = "Error: " + res.status + " - ";
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
            setError(errorText);
          } else {
            if (data.success) {
              window.sessionStorage.setItem("auth", "true");
              window.sessionStorage.setItem("user_id", data.user_id);
              window.sessionStorage.setItem("token", data.token);
            }
          }
        })
        .catch((error) => {
          success = false;
          console.error(error);
        });
      if (success) {
        setEmail("");
        setPass("");
        setError("Logged In Successfully!");
        //Navigate to User Page
      } else {
        setError(errorText);
      }
    } catch (error) {
      console.error(error);
      setError("Error Registering - Check your information and try again");
    }
  };

  return (
    <form
      className="p-6 bg-secondary rounded-xl shadow-md"
      onSubmit={handleSubmit}
    >
      <InputField
        label="Email"
        type="email"
        name="email"
        placeholder="email@email.com"
        // error={submitted && !form.firstName} 
        onChange={(e) => setEmail(e.target.value)}
      />
      <InputField
        label="Password"
        type="password"
        name="password"
        placeholder="password"
        // error={submitted && !form.firstName} 
        onChange={(e) => setPass(e.target.value)}
      />
      <input
        className="w-full px-3 py-2 text-white bg-tertiary rounded hover:bg-blue-700"
        type="submit"
        value={"Submit"}
      />
    </form>
  );
};

export default LoginForm;
