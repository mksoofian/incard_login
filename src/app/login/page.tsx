"use client";
import React from "react";
import { useAuthContext } from "../providers";
import { useRouter } from "next/navigation";
import Image from "next/image";
import logo from "../../../public/incard_logo.png";
import { useForm, SubmitHandler } from "react-hook-form";
import classes from "./page.module.css";
import Link from "next/link";
import getSessionExpiresAt from "../../components/getSessionExpiresAt";

type FormData = {
  user: string;
  password: string;
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
    setError,
    formState: { errors },
  } = useForm<FormData>();

  // Global State
  const { setIsLoggedIn } = useAuthContext();

  //   Handle user form submission and store the info to local storage
  const onSubmit: SubmitHandler<FormData> = (data) => {
    if (
      (data.user === loginInfo.user && data.password !== loginInfo.password) ||
      (data.user !== loginInfo.user && data.password === loginInfo.password) ||
      (data.user !== loginInfo.user && data.password !== loginInfo.password)
    ) {
      setError("user", {
        message: "username and password combination not valid",
      });
    } else if (
      data.user === loginInfo.user &&
      data.password === loginInfo.password
    ) {
      // if user credentials are correct
      const expiresTime = getSessionExpiresAt(60); //Sets session to expire in 60 minutes
      localStorage.setItem("login-expires", expiresTime.toString());
      localStorage.setItem("login-info", JSON.stringify("userLoggedIn")); // add "userLoggedIn" to local storage
      setIsLoggedIn(true); //Sets global state to true
      router.push("/dashboard"); // Routes user to dashboard
    }
  };

  return (
    <div className={classes.page}>
      <form
        noValidate
        onSubmit={handleSubmit(onSubmit)}
        className={classes.form}
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
        <h1 className={classes.header1}>Hello!</h1>
        <h2 className={classes.header2}>Log in to your incard account.</h2>

        <div className={classes.formInputsContainer}>
          <div className={classes.inputContainer}>
            <label htmlFor="user">Username</label>
            <input
              className={classes.formInput}
              id="user"
              {...register("user", {
                required: "Please enter your username",
                minLength: {
                  value: 4,
                  message: "Min username length required is 4 characters",
                },
                maxLength: {
                  value: 16,
                  message: "Max username length is 16 characters",
                },
              })}
              type="text"
            />
            <span className={classes.errorStyling}>
              {" "}
              {errors.user?.message}
            </span>
          </div>

          <div className={classes.inputContainer}>
            <label htmlFor="password">Password</label>
            <input
              className={classes.formInput}
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
            <span className={classes.errorStyling}>
              {errors.password?.message}
            </span>
          </div>
        </div>

        <a className={classes.emphText}>Forgot your password?</a>
        <button type="submit">Login</button>
        <div>
          {" "}
          <p>New to Incard?</p> <a className={classes.emphText}>Sign up</a>
        </div>
      </form>
    </div>
  );
}
