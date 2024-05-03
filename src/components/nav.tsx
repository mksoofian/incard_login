import React from "react";
import Link from "next/link";

export default function Nav() {
  const navLinks = [
    {
      name: "FAQ",
      href: "/",
      icon: null,
    },
    {
      name: "Contact",
      href: "/",
      icon: null,
    },
    {
      name: "Sign in",
      href: "/login",
      icon: null,
    },
  ];

  return (
    <div
      style={{
        marginLeft: "auto",
        display: "flex",
        alignItems: "center",
        gap: "2rem",
      }}
    >
      {navLinks.map((link) => {
        return (
          <Link key={link.name} href={link.href} style={{ fontWeight: "300" }}>
            <p>{link.name}</p>
          </Link>
        );
      })}

      <button>
        <Link key="open_account" href="/">
          Open an account
        </Link>
      </button>
    </div>
  );
}
