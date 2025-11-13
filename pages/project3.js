import React from "react";
import Link from "next/link";

export default function Project3() {
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
      <h1>Sample Company Webiste (Beauty Within)</h1>
      <h2>Project created to showcase beauty and wellness services.</h2>
      <br></br>
      <p>
        This Sample Company Website (Beauty Within) is a modern, responsive, and visually engaging website built with Next.js and Tailwind CSS. While the current demo focuses on beauty and wellness services, it is fully customizable and can be adapted for any type of business or portfolio. The site features dark mode support, smooth animations, a dynamic contact form powered by Web3Forms, and reusable components for easy scalability. Dedicated sections showcase services, individual work pages,like the Haircare page, allow detailed presentation of what the company is offering. Designed with user experience and accessibility in mind, it’s ideal for any company or creator looking to establish a professional online presence.
        <br></br>
        <br></br>
        This project demonstrates my ability to create polished, user-friendly web applications that effectively communicate a brand’s identity and offerings. Whether you’re a small business, freelancer, or creative professional, this template provides a solid foundation to build upon and customize to your specific needs.
        <br></br>
      </p>
      <a
        href="https://github.com/Denisse030/Sample-Company-Website"
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
            src="https://www.youtube.com/embed/Tf2uxGsjvYc?si=2e93wTdIGNjZ3rJ6" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin"
            style={{ border: "none", alignItems: "center" }}
            allowfullscreen>
        </iframe>
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
