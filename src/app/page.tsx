import Image from "next/image";
import styles from "./page.module.css";
import Nav from "@/components/nav";
import Header from "../components/header";
import Hero from "../components/hero";
import React from "react";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
    </div>
  );
}
