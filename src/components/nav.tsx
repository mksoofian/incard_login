import React, { useContext, useEffect } from "react";
import Link from "next/link";
import { useAuthContext } from "../components/AuthContext";
import { useRouter } from "next/navigation";

export default function Nav() {
  // Global State
  const { isLoggedIn, setIsLoggedIn } = useAuthContext();

  // Router for redirecting user after successful login
  const router = useRouter();

  // Update effect to handle state changes
  useEffect(() => {
    console.log("isLoggedIn updated:", isLoggedIn); // Optional for debugging
  }, [isLoggedIn]); // Dependency array: re-run on isLoggedIn change

  const logOutBtn = (
    <button
      onClick={() => {
        localStorage.removeItem("login-info");
        setIsLoggedIn(false);
        router.push("/"); //sends user back to home page
        console.log(isLoggedIn);
      }}
      style={{ fontWeight: "300" }}
    >
      {" "}
      <Link href={"/"} style={{ fontWeight: "300" }}>
        {" "}
        Log Out
      </Link>
    </button>
  );

  const signIn = (
    <>
      <Link href={"/login"} style={{ fontWeight: "300" }}>
        {" "}
        Sign In
      </Link>
      <button>
        <Link key="open_account" href="/">
          Open an account
        </Link>
      </button>
    </>
  );

  return (
    <div
      style={{
        marginLeft: "auto",
        display: "flex",
        alignItems: "center",
        gap: "2rem",
      }}
    >
      <Link href={"/"} style={{ fontWeight: "300" }}>
        <p>FAQ</p>
      </Link>

      <Link href={"/"} style={{ fontWeight: "300" }}>
        <p>Contact</p>
      </Link>

      {isLoggedIn ? logOutBtn : signIn}
    </div>
  );
}
