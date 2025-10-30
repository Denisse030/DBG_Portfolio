import React from "react";
import Link from "next/link";

export default function Project1() {
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
      <h1>
        🪪 Content Management System with Role-Based Access Control, Blockchain
        Logging & Machine Learning Integration
      </h1>
      <h2>Senior Capstone Project – John Jay College</h2>
      <br></br>
      <p>
        Led a team of four in designing and developing a full-stack
        cybersecurity web application as part of a senior capstone project. The
        system features secure user authentication, role-based access control
        (RBAC), and content moderation capabilities for Admins, Moderators, and
        Clients. I was responsible for system architecture, and backend
        implementation.
        <br></br>
        <br></br>
        To enhance security and auditability, I integrated blockchain technology
        using Solidity smart contracts and Web3.js to store immutable logs of
        user activities on the Ethereum network. For proactive threat detection,
        I implemented machine learning-based anomaly detection using
        Simple-Statistics to identify irregular login patterns. The backend
        stack included Node.js, Express.js, MongoDB, Passport.js, and Bcrypt for
        secure authentication and data handling. The frontend, built with HTML,
        CSS, and EJS, was fully responsive across devices, and featured an admin
        dashboard for managing users, reviewing logs, and assigning permissions.
      </p>
      <a
        href="https://github.com/Denisse030/CMS_with_RBAC_Project"
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
          src="https://www.youtube.com/embed/svGL3UsED9Y?si=cKDFkQhj0p98kDbV"
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
