"use client";
import { useEffect } from "react";
import { useAuthContext } from "../../components/AuthContext";
import Header from "../../components/header";
import { useRouter } from "next/navigation";
import { useIdleTimer } from "../../components/useIdleTimer";

function Dashboard() {
  // Global State
  const { isLoggedIn, setIsLoggedIn } = useAuthContext();
  // Router for redirecting user if not logged in
  const router = useRouter();
  // "Idle Timer" for session expiration
  const { idleTime, handleUserInteraction } = useIdleTimer();
  const sessionExpiresAt = 10; //Determines limit of how many seconds until session expires/logout

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
    <>
      <Header />
      <div
        style={{
          position: "absolute",
          inset: "0 0 0 0",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "6rem",
          zIndex: "1",
        }}
      >
        <p>
          You are logged in.
          <br /> Session Expires In: {sessionExpiresAt - idleTime} seconds{" "}
          <br />
        </p>
      </div>
    </>
  );
}
export default Dashboard;
