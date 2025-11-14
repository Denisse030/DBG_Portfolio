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
      <h1>Dulce Aroma - Coffee Shop Website Design</h1>
      <h2>A warm, inviting web experience inspired by the craft of coffee and café culture.</h2>
      <br></br>
      <p>
        Café Dulce Aroma is a responsive web experience inspired by the warmth and creativity of café culture. I designed and developed the site to showcase curated coffee recipes, highlight brewing techniques, and share personalized café recommendations through interactive visuals and smooth UI animations. The project focuses on creating an inviting digital atmosphere, combining strong visual storytelling with practical features like a downloadable recipe carousel and an integrated contact form.
        <br></br>
        <br></br>
        This project demonstrates my ability to build modern, user-centered interfaces while integrating third-party tools and interactive components. I implemented a dynamic map for café recommendations, ensured mobile-first responsiveness, and crafted a cohesive visual identity across the entire site. Through this build, I strengthened my front-end architecture skills, refined my approach to component design, and delivered a polished, engaging experience optimized for all screen sizes.
        <br></br>
      </p>
      <h2>Tech Stack</h2>
      <p><b>React, Tailwind CSS, JavaScript, React Leaflet, Web3Forms API, HTML/CSS</b></p>
      <a
        href="https://github.com/Denisse030/Dulce-Aroma"
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
        src="https://www.youtube.com/embed/fKSCBcATJPE?si=u_S8QA9XIHgvqpTX" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerpolicy="strict-origin-when-cross-origin" 
        style={{ border: "none", alignItems: "center" }}
        allowfullscreen></iframe>
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