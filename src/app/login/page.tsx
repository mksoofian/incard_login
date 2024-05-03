import React from "react";
import Header from "@/components/header";
import Image from "next/image";
import logo from "../../../public/incard_logo.png";

export default function Login() {
  return (
    <div
      style={{
        backgroundColor: "rgb(39, 32, 45)",
        padding: "10rem",
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        fontFamily: "var(--font-poppins)",
        fontWeight: "200",
      }}
    >
      <Image
        src={logo}
        alt="incard logo"
        width={96}
        height={26}
        style={{ marginBottom: "4rem" }}
      />
      <h1 style={{ fontSize: "3.6rem", fontWeight: "500" }}>Hello!</h1>
      <h2
        style={{
          fontSize: "1.6rem",
          //   fontFamily: "var(--font-poppins)",
          fontWeight: "200",
        }}
      >
        Log in to your incard account.
      </h2>
      <label>Email address</label>
      <input
        className="form-input"
        name="email"
        id="email"
        type="email"
        required
      ></input>
      <label>Password</label>
      <input
        className="form-input"
        name="password"
        id="password"
        type="password"
        required
      ></input>
      <a>Forgot your password?</a>
      <button type="submit">Login</button>
      <div>
        {" "}
        <p>New to Incard?</p> <a>Sign up</a>
      </div>
    </div>
  );
}
