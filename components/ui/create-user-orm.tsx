import { useState } from "react";
import InputField from "./inputfiled-for-form";

const CreateUserForm = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [passConfirm, setPassConfirm] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setError(null);
    let success = true;
    let errorText = "";

    if (pass !== passConfirm) {
      setError("Password and password confirmation do not match");
      console.log("Password and password confirmation do not match");
      return;
    }

    const payload = JSON.stringify({
      first_name: firstName,
      last_name: lastName,
      email: email,
      password: pass,
    });
    try {
      fetch("http://localhost:8000/users/", {
        method: "POST",
        body: payload,
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => {
          console.log(res);
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
          }
        })
        .catch((error) => {
          success = false;
          console.error(error);
        });
      if (success) {
        setEmail("");
        setFirstName("");
        setLastName("");
        setPass("");
        setError("Registered Successfully!");
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
      className="p-6 bg-secondary rounded-xl shadow-md "
      onSubmit={handleSubmit}
    >
      <InputField
        label="Firstname"
        type="text"
        name="fullname"
        placeholder="Firstname"
        onChange={(e) => setFirstName(e.target.value)}
      />
      <InputField
        label="Lastname"
        type="text"
        name="lastname"
        placeholder="Lastname"
        onChange={(e) => setLastName(e.target.value)}
      />
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
        placeholder="Password"
        onChange={(e) => setPass(e.target.value)}
      />
      <InputField
        label="Confirm Password"
        type="password"
        name="confirmPassword"
        placeholder="Confirm Password"
        onChange={(e) => setPassConfirm(e.target.value)}
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
