"use client";
import { useEffect } from "react";
import { useAuthContext } from "../../components/AuthContext";
import Header from "../../components/header";
import { useRouter } from "next/navigation";
import { useIdleTimer } from "../../components/useIdleTimer";

function Dashboard() {
  // Global State
  const { isLoggedIn, setIsLoggedIn, sessionExpiresAt } = useAuthContext();
  // Router for redirecting user if not logged in
  const router = useRouter();
  // "Idle Timer" for session expiration
  const { idleTime, handleUserInteraction } = useIdleTimer();

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
