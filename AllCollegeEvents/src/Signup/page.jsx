import React, { useState } from "react";
import styles from "./style.module.css";
import Image from "../assets/image (1).jpg";
import Button from "../Components/Buttons/btn";
import { useNavigate } from "react-router-dom";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";

const Signup = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const toggleVisiblity = () => {
    setShowPassword(!showPassword);
  };

  const handleSignup = () => {
    if (!name || !email || !password || !confirmPassword) {
      alert("Please fill all fields");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    const existingUsers =
      JSON.parse(localStorage.getItem("users")) || [];
    const userExists = existingUsers.find(
      (user) => user.email === email
    );

    if (userExists) {
      alert("User already exists. Please Sign In.");
      navigate("/signin");
      return;
    }

    const newUser = {
      name,
      email,
      password,
      followers: 0,
      following: 0,
      rank: 0,
    };
    localStorage.setItem(
      "users",
      JSON.stringify([...existingUsers, newUser])
    );

    alert("Account Created Successfully!");
    navigate("/");
  };

  return (
    <div className={styles.container}>
      <img src={Image} alt="" />

      <div className={styles.form}>
        <h2>Name</h2>
        <input
          type="text"
          placeholder="Enter Your Name"
          onChange={(e) => setName(e.target.value)}
        />

        <h2>E-Mail</h2>
        <input
          type="email"
          placeholder="Enter Your Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <h2>Password</h2>
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Enter the Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <span onClick={toggleVisiblity}>
          {showPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
        </span>

        <h2>Confirm Password</h2>
        <input
          type="password"
          placeholder="Re-enter the Password"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <Button onClick={handleSignup}>
          Create Account
        </Button>

        <div className={styles.account}>
          <h2>Already Have Account?</h2>
          <h1 onClick={() => navigate("/signin")}>
            Sign In
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Signup;