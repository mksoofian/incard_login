"use client";
import Header from "../components/header";
import Hero from "../components/hero";
import React, { useEffect, useState } from "react";

export default function Home() {
  // Detects if user is logged in
  const [isLoggedIn, setLoggedIn] = useState(false);

  // Load data from localStorage on initial render
  useEffect(() => {
    const storedLogin = JSON.parse(localStorage.getItem("login-info"));
    if (storedLogin) {
      setLoggedIn(true);
    }
  }, []);

  return (
    <div>
      <Header loggedIn={isLoggedIn} />
      <Hero />
    </div>
  );
}
