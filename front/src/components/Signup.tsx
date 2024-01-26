import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { signupSuccess } from "../store/actions/actionConnection";
import { ButtonSubmit } from "./Buttons";

const Signup = () => {
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

      const user = await response.json();
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

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-center text-4xl py-8 text-white">Sign Up Now</h2>
      <input
        type="text"
        name="username"
        placeholder="Name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <ButtonSubmit type="submit">Sign Up</ButtonSubmit>
    </form>
  );
};

export default Signup;
