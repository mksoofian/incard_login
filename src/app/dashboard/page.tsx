"use client";
import { useAuthContext } from "../providers";
import Header from "../../components/header";
import classes from "./page.module.css";

function Dashboard() {
  // Global State
  const { idleExpiresAt, idleTime } = useAuthContext();

  return (
    <>
      <Header />
      <div className={classes.dashboard}>
        <p>
          You are logged in.
          <br /> If idle, session will expire In: {idleExpiresAt -
            idleTime}{" "}
          seconds
          <br />
          Any user action will reset the timer
        </p>
      </div>
    </>
  );
}
export default Dashboard;
