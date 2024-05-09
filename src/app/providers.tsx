"use client";
import { AuthContext } from "../components/AuthContext";
import { useState } from "react";

export function Providers({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // initializes state as false

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
}
