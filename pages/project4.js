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
      <h1>Beauty Outlet</h1>
      <h2>A frontend beauty e-commerce site featuring skincare products, built with modern UI design and clean, scalable code.</h2>
      <br></br>
      <p>
        Beauty Outlet is a responsive e-commerce web application designed for a beauty and skincare store. Built with React.js, Tailwind CSS, and React Router, it delivers a modern, user-friendly shopping experience through clean layouts, smooth navigation, and dynamic state management. The project includes core e-commerce features such as product listings, detailed product pages with image galleries and variant selection, and a simulated shopping cart that calculates subtotals and totals on the frontend. Its responsive design ensures optimal performance across mobile, tablet, and desktop devices.
        <br></br>
        <br></br>
        This project highlights my ability to create scalable, component-based user interfaces while maintaining a strong focus on design and usability. It also demonstrates my understanding of modern frontend tools and workflows, including the React Context API for state management and Vite for efficient development. Future improvements include integrating backend functionality for authentication, order management, and payments to evolve Beauty Outlet into a fully functional online store.
        <br></br>
      </p>
      <h2>Tech Stack</h2>
      <p><b>React.js, React Router, Tailwind CSS</b></p>
      <a
        href="https://github.com/Denisse030/Beauty-Outlet"
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
            src="https://www.youtube.com/embed/50IS17RSqN8?si=1OOBDRTJjf31iXC2" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin"
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