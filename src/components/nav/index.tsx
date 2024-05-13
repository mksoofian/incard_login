import React from "react";
import Link from "next/link";
import { useAuthContext } from "../../app/providers";
import classes from "./index.module.css";

export default function Nav() {
  // Global State
  const { isLoggedIn, handleLogOut } = useAuthContext();

  return (
    <div className={classes.navContainer}>
      <Link href={"/home"} className={classes.link}>
        <p>FAQ</p>
      </Link>

      <Link href={"/home"} className={classes.link}>
        <p>Contact</p>
      </Link>

      {isLoggedIn ? (
        <>
          {" "}
          <button
            onClick={() => {
              handleLogOut();
            }}
            className={classes.link}
          >
            {" "}
            <Link href={"/home"} className={classes.link}>
              {" "}
              Log Out
            </Link>
          </button>
        </>
      ) : (
        <>
          <Link href={"/login"} className={classes.link}>
            {" "}
            Sign In
          </Link>
          <button>
            <Link key="open_account" href="/">
              Open an account
            </Link>
          </button>
        </>
      )}
    </div>
  );
}
