"use client";
import Image from "next/image";
import Nav from "./nav";
import logo from "../../public/incard_logo.png";
import React from "react";

export default function Header() {
  return (
    <div>
      <header
        style={{
          padding: "3rem",
          display: "flex",
          alignItems: "center",
          //   justifyContent: "space-between",
          position: "absolute",
          top: "0",
        }}
      >
        <Image src={logo} alt="incard logo" width={132} height={36.17} />
        <Nav />
      </header>{" "}
    </div>
  );
}
