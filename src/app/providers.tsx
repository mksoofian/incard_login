"use client";
import { useRouter } from "next/router";
import { AuthContext } from "../components/AuthContext";
import { useEffect, useState } from "react";

const protectedRoutes = ["/dashboard", "/admin", "/settings"];
const unprotectedRoutes = ["/login", "/signup"];

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // initializes state as false
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("login-info");
    setIsLoggedIn(false);
    router.push("/"); //sends user back to home page
    console.log(isLoggedIn);
  };

  const handleLogin = () => {};

  useEffect(() => {
    localStorage.setItem("login-expires"); // correct, add "userLoggedIn" to local storage
  }, [ideas]);

  // Load data from localStorage on initial render
  useEffect(() => {
    const expire = new Date(localStorage.getItem("login-expires"));

    if (new Date() < expires) {
    }
    // trying to access
    if (protectedRoutes.includes(router.pathname) && !storedId) {
      router.push("/login");
      setIsLoggedIn(false);
    }

    if (storedId && unprotectedRoutes.includes(router.pathname)) {
      router.push("/dashboard");
      setIsLoggedIn(true);
    }

    // what is the current route - dashboard
    // are they logged? - yes
    // should they be redirected - no
    // router.push("/dashboard"); //sends user to dashboard
  }, []);

  // Update effect to handle state changes
  useEffect(() => {
    isLoggedIn ? console.log(isLoggedIn) : router.push("/"); //If logged in, confirm in log, otherwise, send user back to the homepage
  }, [isLoggedIn]);

  // Expires session when the  to session expiration
  useEffect(() => {
    if (idleTime === sessionExpiresAt) {
      localStorage.removeItem("login-info"); //removes login info from local storage
      setIsLoggedIn(false); // sets global state of the users login status to false
      router.push("/"); //sends user back to home page since they are no longer logged in
      console.log(isLoggedIn); // confirms state of isLoggedIn in the console
    }
  }, [idleTime]); // Execute every time the idle timer updates

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
}
