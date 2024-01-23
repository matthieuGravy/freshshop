import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../store/actions/actionConnection";

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
      <label htmlFor="email">Email</label>
      <input id="email" name="email" value={email} onChange={handleChange} />
      {errors.email && <p>{errors.email}</p>}

      <label htmlFor="password">Password</label>
      <input
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

      <input type="submit" />
    </form>
  );
};

export default Login;
