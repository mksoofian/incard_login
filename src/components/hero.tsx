import React from "react";

export default function Hero() {
  return (
    <div
      style={{
        color: "white",
        fontSize: "6.4rem",
        textAlign: "center",
        margin: "8rem 3rem 0 3rem",
      }}
    >
      <h1
        style={{
          fontSize: "inherit",
          padding: "4rem 4.5rem 0",
          marginBottom: "2rem",
        }}
      >
        <span
          style={{ color: "var(  --highlight-color)", fontSize: "inherit" }}
        >
          Grow your online{" "}
        </span>
        business with incard.
      </h1>
      <h2
        style={{
          fontSize: "2.1rem",
          fontWeight: "300",
          padding: "0 4rem",
          lineHeight: "1.5",
        }}
      >
        Faster payments. Higher limits. 24/7 support. Welcome to the world's
        first payment solution designed exclusively for e-commerce, marketers
        and creators.
      </h2>
      <button
        style={{
          fontFamily: "var(--font-poppins)",
        }}
      >
        Open an account
      </button>
    </div>
  );
}
