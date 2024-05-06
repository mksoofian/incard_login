import React from "react";
import Link from "next/link";

export default function Nav(props) {
  const { loggedIn } = props;
  console.log(loggedIn);

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
      {loggedIn ? (
        <button
          onClick={() => {
            localStorage.removeItem("login-info");
          }}
        >
          {" "}
          <Link href={"/"} style={{ fontWeight: "300" }}>
            Log out
          </Link>
        </button>
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
