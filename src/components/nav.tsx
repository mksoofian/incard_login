import React, { useContext, useEffect } from "react";
import Link from "next/link";
import { useAuthContext } from "../components/AuthContext";
import { useRouter } from "next/navigation";

const LogoutButton = ({ handleLogout }) => (
  <button onClick={handleLogout} style={{ fontWeight: "300" }}>
    {" "}
    <Link href={"/"} style={{ fontWeight: "300" }}>
      {" "}
      Log Out
    </Link>
  </button>
);

export default function Nav() {
  // Global State
  const { isLoggedIn, setIsLoggedIn, handleLogout } = useAuthContext();

  // Router for redirecting user after successful login
  const router = useRouter();

  // state

  // methods

  // useEfffects

  // JSX (return)
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

      {isLoggedIn ? (
        <LogoutButton handleLogout={handleLogout} />
      ) : (
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
      )}
    </div>
  );
}
