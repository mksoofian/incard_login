"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import logo from "../../../public/incard_logo.png";
import { useForm, SubmitHandler } from "react-hook-form";
import classes from "./page.module.css";
import Link from "next/link";

type FormData = {
  email: string;
  password: string;
};

export default function Login() {
  // Mandated login information from Incard
  const loginInfo = {
    email: "incard@incard.com",
    password: "incard",
  };

  // Router for redirecting user after successful login
  const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>();

  //   Handle user form submission and store the info to local storage
  const onSubmit: SubmitHandler<FormData> = (data) => {
    if (data.email == loginInfo.email && data.password == loginInfo.password) {
      localStorage.setItem("login-info", JSON.stringify(data));
      router.push("/"); //sends user back to home page
    }
  };

  //   console.log(watch("email")); // watch input value by passing the name of it
  console.log(errors);

  return (
    <form
      noValidate
      onSubmit={handleSubmit(onSubmit)}
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
      <Link href={"/"}>
        <Image
          src={logo}
          alt="incard logo"
          width={96}
          height={26}
          style={{ marginBottom: "4rem" }}
        />
      </Link>
      <h1 style={{ fontSize: "3.2rem", fontWeight: "500" }}>Hello!</h1>
      <h2
        style={{
          fontSize: "1.6rem",
          //   fontFamily: "var(--font-poppins)",
          fontWeight: "200",
        }}
      >
        Log in to your incard account.
      </h2>

      <div className={classes.formInputsContainer}>
        <div className={classes.inputContainer}>
          <label htmlFor="email">Email address</label>
          <input
            className="form-input"
            id="email"
            {...register("email", {
              required: "Please enter your email",
              pattern: {
                value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                message: "Invalid email format",
              },
            })}
            type="email"
          />
          <span style={{ color: "red", fontSize: "1.2rem" }}>
            {" "}
            {errors.email?.message}
          </span>
        </div>

        <div className={classes.inputContainer}>
          <label htmlFor="password">Password</label>
          <input
            className="form-input"
            id="password"
            {...register("password", {
              required: "Please enter your password",
              minLength: {
                value: 4,
                message: "Min password length required is 4 characters",
              },
              maxLength: {
                value: 16,
                message: "Max  password length is 16 characters",
              },
            })}
            type="password"
          />
          <span style={{ color: "red", fontSize: "1.2rem" }}>
            {errors.password?.message}
          </span>
        </div>
      </div>

      <a>Forgot your password?</a>
      <button type="submit">Login</button>
      <div>
        {" "}
        <p>New to Incard?</p> <a>Sign up</a>
      </div>
    </form>
  );
}
