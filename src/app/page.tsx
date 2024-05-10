"use client";
import Home from "../components/home";
import Header from "../components/header";
import { useAuthContext } from "../components/AuthContext";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

function App() {
  // Global State
  const { isLoggedIn, setIsLoggedIn } = useAuthContext();
  // Router for redirecting user if not logged in
  const router = useRouter();

  return (
    <>
      <Header />
      <div>
        <Header />
        <Hero />
      </div>
    </>
  );
}
export default App;
