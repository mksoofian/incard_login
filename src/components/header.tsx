"use client";
import Image from "next/image";
import Nav from "./nav";
import logo from "../../public/incard_logo.png";
import React from "react";
import Link from "next/link";

export default function Header(props) {
  const { loggedIn } = props;

  return (
    <div>
      <header
        style={{
          padding: "3rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          position: "absolute",
          top: "0",
          width: "100%",
        }}
      >
        <Link href="/">
          {" "}
          <Image src={logo} alt="incard logo" width={132} height={36.17} />
        </Link>
        <Nav loggedIn={loggedIn} />
      </header>{" "}
    </div>
  );
}
