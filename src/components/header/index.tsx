"use client";
import Image from "next/image";
import Nav from "../nav";
import logo from "../../../public/incard_logo.png";
import React from "react";
import Link from "next/link";
import classes from "./index.module.css";

export default function Header() {
  return (
    <header className={classes.headerContainer}>
      <Link href="/home">
        {" "}
        <Image src={logo} alt="incard logo" width={132} height={36.17} />
      </Link>
      <Nav />
    </header>
  );
}
