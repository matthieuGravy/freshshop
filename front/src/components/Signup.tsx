import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { signupSuccess } from "../store/actions/actionConnection";
import { ButtonSubmit } from "./Buttons";

interface SignupProps {
  children?: React.ReactNode;
}
const Signup: React.FC<SignupProps> = ({ children }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });
  const dispatch = useDispatch();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:4700/new-user", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password }),
      });

      const data = await response.json();
      const user = {
        ...data,
        _id: data._id, // Assurez-vous que l'ID de l'utilisateur est inclus dans l'objet `user`
      };
      console.log(user);

      console.log("Inscrit");

      dispatch(signupSuccess(user));
    } catch (error) {
      console.error("Signup error:", error);
      if (error.response) {
        console.error("Server Error:", error.response.data);
      }
    }
  };

  const inputStyle =
    "bg-transparent backdrop-blur-sm border-2 border-stone-500 rounded-full ps-5 p-2 placeholder:text-slate-500 lg:w-64 m-auto";

  return (
    <form
      onSubmit={handleSubmit}
      className="flex-flex-col justify-center text-center bg-stone-100 rounded-xl px-8 m-auto max-w-xl pb-6 "
    >
      {children}
      <section className="flex flex-col justify-center gap-y-6 pb-6">
        <input
          className={inputStyle}
          type="text"
          name="username"
          placeholder="Name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className={inputStyle}
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className={inputStyle}
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </section>
      <ButtonSubmit type="submit" text="Sign Up"></ButtonSubmit>
    </form>
  );
};

export default Signup;
