import React, { useState } from "react";
import styles from "./style.module.css";
import Image from "../assets/image (2).jpg";
import Button from "../Components/Buttons/btn";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignin = () => {
    if (!email || !password) {
      alert("Please fill all fields");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const existingUser = users.find(
      (user) => user.email === email
    );

    if (!existingUser) {
      alert("User not found. Please Sign Up.");
      return;
    }

    if (existingUser.password !== password) {
      alert("Incorrect Password");
      return;
    }

    // Save logged in user
    localStorage.setItem(
      "currentUser",
      JSON.stringify(existingUser)
    );

    alert("Login Successful!");
    navigate("/"); // or /profile
  };

  return (
    <div className={styles.container}>
      <img src={Image} alt="" />

      <div className={styles.form}>
        <h3>Email</h3>
        <input
          type="text"
          placeholder="Enter Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <h3>Password</h3>
        <input
          type="password"
          placeholder="Enter Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button variant="primary" onClick={handleSignin}>
          Sign In
        </Button>

        <div className={styles.account}>
          <h2>Didn't have an Account?</h2>
          <h1 onClick={() => navigate("/signup")}>
            Sign Up
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Signin;