import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Project7() {
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
      <h1>Horror Movie Catalog</h1>
      <h2>
        Project developed during my time at the Tech Talent Pipeline Full-Stack
        Bootcamp
      </h2>
      <br></br>
      <p>
        This Horror Movie Catalog is a beginner-friendly web application that
        allows users to browse and explore a curated list of some of my favorite
        movies through a clean and responsive interface. Built with HTML, CSS,
        and JavaScript, this project demonstrates foundational front-end
        development skills including layout design, responsive styling, and DOM
        manipulation. Users can view movie details such as posters, titles,
        trailers, and the movies soundtracks, making it an engaging and visually
        appealing experience. This project served as an introduction to working
        with static data and UI presentation, and it helped lay the groundwork
        for more complex JavaScript-based applications that I would develop in
        the future.
      </p>
      <h2>Tech Stack</h2>
      <p><b>HTML/CSS, Static Content</b></p>
      <a
      href="https://github.com/Denisse030/Movie-Catalog.git"
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
      <div className="image-grid">
        <div className="pop-image">
          <Image
            src="/images/horrormovie-cover.png"
            alt="Project Screenshot 1"
            width={500}
            height={300}
            style={{ borderRadius: "12px" }}
          />
        </div>

        <div className="pop-image">
          <Image
            src="/images/movieposters.png"
            alt="Project Screenshot 2"
            width={500}
            height={300}
            style={{ borderRadius: "12px" }}
          />
        </div>

        <div className="pop-image">
          <Image
            src="/images/moviesoundtracks.png"
            alt="Project Screenshot 3"
            width={500}
            height={300}
            style={{ borderRadius: "12px" }}
          />
        </div>

        <div className="pop-image">
          <Image
            src="/images/movietrailers.png"
            alt="Project Screenshot 4"
            width={500}
            height={300}
            style={{ borderRadius: "12px" }}
          />
        </div>
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

      <style jsx>{`
      .image-grid {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 20px;
      margin-top: 30px;
      }

      .pop-image {
        transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
        border-radius: 12px;
      }

      .pop-image:hover {
        transform: scale(1.05);
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
      }

      @media (max-width: 768px) {
        .image-grid {
        flex-direction: column;
        align-items: center;
        }

        .pop-image :global(img) {
          width: 90% !important;
          height: auto !important;
        }
      `}</style>
    </div>
  );
}
