import React from "react";
import classes from "./page.module.css";
import Header from "../../components/header";

export default function Home() {
  return (
    <>
      <Header />
      <div className={classes.heroContainer}>
        <h1 className={classes.heroHeader1}>
          <span className={classes.highlightText}>Grow your online </span>
          business with incard.
        </h1>
        <h2 className={classes.heroHeader2}>
          Faster payments. Higher limits. 24/7 support. Welcome to the world's
          first payment solution designed exclusively for e-commerce, marketers
          and creators.
        </h2>
        <button className={classes.poppins}>Open an account</button>
      </div>
    </>
  );
}
