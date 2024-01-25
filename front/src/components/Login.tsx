import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { loginSuccess } from "../store/actions/actionConnection";
import { ButtonSubmit } from "./Buttons";

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "email") {
      setEmail(e.target.value);
    } else if (e.target.name === "password") {
      setPassword(e.target.value);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    let formErrors = { email: "", password: "" };
    if (!email) formErrors.email = "Ce champ est requis";
    if (!password) formErrors.password = "Ce champ est requis";
    setErrors(formErrors);

    if (formErrors.email || formErrors.password) return;

    try {
      const response = await fetch("http://localhost:4700/login", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const user = await response.json();

      if (!user.connected) {
        setErrors({
          email: "Email ou mot de passe non trouvé",
          password: "Email ou mot de passe non trouvé",
        });
        throw new Error("Email ou mot de passe non trouvé");
      }

      console.log("connecté");
      dispatch(loginSuccess(user));
    } catch (error) {
      console.error("Login error:", error);
      if (error.response) {
        console.error("Server Error:", error.response.data);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-center text-4xl py-8">Connect Now</h2>
      <section className="w-full flex flex-col lg:flex-row justify-center gap-y-6 lg:gap-x-6 pb-6 ">
        {/*
        <label htmlFor="email">Email</label>
        */}
        <input
          className="bg-transparent backdrop-blur-sm border-2 border-stone-500 rounded-full ps-5 p-2 placeholder:text-stone-600"
          placeholder="Email"
          id="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
        {errors.email && <p>{errors.email}</p>}
        {/*
        <label htmlFor="password">Password</label>
         */}

        <input
          className="bg-transparent backdrop-blur-sm border-2 border-stone-500 rounded-full ps-5 p-2 placeholder:text-stone-600"
          placeholder="Password"
          id="password"
          name="password"
          type="password"
          value={password}
          onChange={handleChange}
        />

        {errors.password && <p>{errors.password}</p>}
        {(errors.email || errors.password) && (
          <p>Des erreurs sont présentes dans le formulaire</p>
        )}
        <ButtonSubmit text="Login" />
      </section>
    </form>
  );
};

export default Login;
