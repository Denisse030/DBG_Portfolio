import React from "react";
import Link from "next/link";

export default function Project2() {
  return (
    <div
      style={{
        padding: "40px",
        fontFamily: "monospace",
        textAlign: "center",
        backgroundColor: "#fce4ec",
        minHeight: "100vh",
        boxSizing: "border-box",
      }}
    >
      <h1>📊 Budgeting101 App</h1>
      <h2>Project created to track personal expenses.</h2>
      <br></br>
      <p>
        Budgeting101 is a responsive, multi-user budgeting web application built
        with React that empowers users to track expenses, manage custom budgets,
        and gain visual insights into their financial habits. This project was
        inspired by a tutorial from Net Ninja on YouTube, which provided the
        foundation for the original structure. I updated outdated code,
        modernized the tech stack, and added new features such as multi-user
        support with personalized data stored in localStorage, a dark mode
        toggle that persists user preferences across sessions, and a dynamic
        dashboard that visualizes spending trends through interactive pie, bar,
        and line charts using Recharts.
        <br></br>
        <br></br>
        Users can easily create and assign expenses to custom budgets while
        receiving real-time alerts when 80% or more of a budget has been used.
        Built with React, JavaScript, React Router, and CSS, Budgeting101
        delivers a sleek and accessible experience optimized for both desktop
        and mobile devices.
        <br></br>
        <br></br>
        🎥 Check out the original tutorial by Net Ninja on YouTube to learn the
        basics behind this project’s foundation!
      </p>
      <a
        href="https://github.com/Denisse030/Budgeting101-App"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "inline-block",
          marginTop: "16px",
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
        🔗 View GitHub Project
      </a>
      <br></br>
      <br></br>
      <h3>Click below to watch the Demo Video!</h3>

      <div
        style={{
          marginTop: "20px",
          borderRadius: "12px",
          border: "solid pink",
          overflow: "hidden",
          maxWidth: "480px",
          height: "270px",
          alignItems: "center",
          marginLeft: "auto",
          marginRight: "auto",
          transition: "transform 0.3s ease-in-out",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.03)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)";
        }}
      >
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/HXGR01qh7to?si=XMI8Qk0ulJjlsPDT"
          title="Capstone Project Demo"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
          style={{ border: "none", alignItems: "center" }}
        ></iframe>
      </div>

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
      <style>
      {`
        @media (max-width: 600px) {
          div {
            font-size: 14px;
          }
        }
      `}
      </style>
    </div>
  );
}
