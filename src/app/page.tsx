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

  // Load data from localStorage on initial render
  useEffect(() => {
    const storedId = JSON.parse(localStorage.getItem("login-info"));
    if (storedId) {
      setIsLoggedIn(true);
      console.log(`Still logged in...!`);
      router.push("/dashboard"); //sends user to dashboard
    }
  }, []);

  return (
    <>
      <Header />
      <Home />
    </>
  );
}
export default App;
