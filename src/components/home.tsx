import { useEffect, useState } from "react";
import Header from "./header";
import Hero from "./hero";
import { useContext } from "react";

export default function Home() {
  //   // Detects if user is logged in
  //   const [isLoggedIn, setLoggedIn] = useState(false);

  // Load data from localStorage on initial render
  //   useEffect(() => {
  //     const storedLogin = JSON.parse(localStorage.getItem("login-info"));
  //     if (storedLogin) {
  //       setLoggedIn(true);
  //     }
  //   }, []);

  return (
    <div>
      <Header />
      <Hero />
    </div>
  );
}
