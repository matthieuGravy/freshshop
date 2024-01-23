import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../store/actions/actionConnection";

type FormData = {
  email: string;
  password: string;
};

const Login = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<FormData>({ email: "", password: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    let formErrors = { email: "", password: "" };
    if (!formData.email) formErrors.email = "Ce champ est requis";
    if (!formData.password) formErrors.password = "Ce champ est requis";
    setErrors(formErrors);

    if (formErrors.email || formErrors.password) return;

    try {
      const response = await fetch("http://localhost:4700/login", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Login failed");
      }

      const user = await response.json();

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
      <input
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      {errors.email && <p>{errors.email}</p>}

      <label htmlFor="password">Password</label>
      <input
        id="password"
        name="password"
        type="password"
        value={formData.password}
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
