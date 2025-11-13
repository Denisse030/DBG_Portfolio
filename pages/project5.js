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
        minHeight: "100vh",
        boxSizing: "border-box",
      }}
    >
      <h1>Skincare Routine Generator (Skin 1004 Edition)</h1>
      <h2>
        Project created to help users build personalized skincare routines.
      </h2>
      <br></br>
      <p>
        This Python-based program creates personalized morning <b>(AM)</b> and night <b>(PM)</b> skincare routines using only Skin 1004 products. By entering your skin type and specific concerns, the tool curates a complete routine tailored to your individual needs. It not only matches products to your skin type and concerns but also provides <b>product warnings, usage notes, and tips for treatments and masks</b>. Users can view each product’s key ingredients and receive detailed insights through an intuitive, interactive command-line interface. 
        <br></br>
        <br></br>
        <b>To get started</b>, you simply input your skin type—such as dry, oily, combination, or sensitive—and your main skin concerns, like acne, hydration, or calming. The generator then produces a full skincare routine, complete with ingredient information and personalized product usage guidance.
      </p>
      <h2>Tech Stack</h2>
      <p><b>Python, Python’s built-in typing module, JSON for data storage/loading, Command-line interface (CLI) </b></p>
      <a
        href="https://github.com/Denisse030/Skincare-Routine-Generator"
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
        src="https://www.youtube.com/embed/yoVH6cox4H4?si=V9AMd_f_swTzMIet" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" 
        allowfullscreen
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
