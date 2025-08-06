import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Project5() {
  return (
    <div
      style={{
        padding: "40px",
        fontFamily: "monospace",
        textAlign: "center",
        backgroundColor: "#fce4ec",
        minHeight: "87.5vh",
      }}
    >
      <h1>🏢 Sample Company Website</h1>
      <h2>
        Project created to help small businesses or serve as a portfolio layout
        for individuals.
      </h2>
      <br></br>
      <p>
        This Sample Company Website is a modern, fully responsive website
        designed to be a versatile template for startups, small businesses, or
        personal brands. Built using React, Tailwind CSS, and Swiper.js, the
        site features essential pages such as Home, About, Services, Portfolio,
        and Contact, along with an interactive services slider enhanced with
        custom navigation. The clean, scalable layout adapts seamlessly across
        desktop, tablet, and mobile devices and includes dark mode support for a
        contemporary user experience. This front-end project also incorporates a
        contact form (ready to be hooked to a backend or service like EmailJS),
        modular components, and organized folder structure—making it easy to
        customize for different branding needs. Ideal for developers looking for
        a sleek and functional starting point.
      </p>
      <Link
        href={"https://github.com/Denisse030/Sample-Company-Website"}
        target="_blank"
        rel="noopener noreferrer"
      >
        Link to GitHub Project
      </Link>
      <br></br>

      <Link
        href="/"
        style={{
          display: "inline-block",
          marginTop: "20px",
          fontSize: "15px",
          backgroundColor: "#fcddec",
          color: "#000",
          padding: "10px 16px",
          borderRadius: "8px",
          textDecoration: "none",
          fontWeight: "bold",
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
          transition: "all 0.3s ease-in-out",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = "#fe8ebdd3";
          e.currentTarget.style.transform = "scale(1.03)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = "#fcddec";
          e.currentTarget.style.transform = "scale(1)";
        }}
      >
        🔙 Go Back to Home
      </Link>
    </div>
  );
}
