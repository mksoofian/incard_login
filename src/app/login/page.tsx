"use client";
import React, { useEffect } from "react";
import { useAuthContext } from "../../components/AuthContext";
import { useRouter } from "next/navigation";
import Image from "next/image";
import logo from "../../../public/incard_logo.png";
import { useForm, SubmitHandler } from "react-hook-form";
import classes from "./page.module.css";
import Link from "next/link";

type FormData = {
  user: string;
  password: string;
  dan: boolean;
};

export default function Login() {
  // Mandated login information from Incard
  const loginInfo = {
    user: "incard",
    password: "incard",
  };

  // Router for redirecting user after successful login
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<FormData>();

  // Global State
  const { setIsLoggedIn } = useAuthContext();

  //   Handle user form submission and store the info to local storage
  const onSubmit: SubmitHandler<FormData> = (data) => {
    if (data.user === loginInfo.user && data.password === loginInfo.password) {
      const expiresTime = new Date(); // added 1 hour from now

      localStorage.setItem("login-expires", expiresTime.toString()); // correct, add "userLoggedIn" to local storage

      //confirms if the credentials are correct
      setIsLoggedIn(true); //Sets global state to true
      router.push("/dashboard"); // Routes user to dashboard
    } else {
      setError("user", { message: "Wrong email or password" });
      // but what if the user or password is wrong?
      // what if user is right and password wrong
      // vice versa
      // waht if they both wrong

      // we dont have a user with that email
    }

    // make API call

    // error from BE

    setError("root", { message: "Oops our servers our down" });
  };

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
          fontWeight: "200",
        }}
      >
        Log in to your incard account.
      </h2>

      <div className={classes.formInputsContainer}>
        <div className={classes.inputContainer}>
          <label htmlFor="user">Username</label>
          <input
            className="form-input"
            id="user"
            {...register("user", {
              required: "Please enter your username",
              minLength: {
                value: 4,
                message: "Min password length required is 4 characters",
              },
              maxLength: {
                value: 16,
                message: "Max  password length is 16 characters",
              },
            })}
            type="text"
          />
          <span style={{ color: "red", fontSize: "1.2rem" }}>
            {" "}
            {errors.user?.message}
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
