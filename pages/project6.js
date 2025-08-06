import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Project6() {
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
      <h1>📽️ Horror Movie Catalog</h1>
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
      <Link
        href={" https://github.com/Denisse030/Movie-Catalog.git"}
        target="_blank"
        rel="noopener noreferrer"
      >
        Link to GitHub Project
      </Link>
      <br></br>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
          marginTop: "30px",
        }}
      >
        <Image
          src="/images/horrormovie-cover.png"
          alt="Project Screenshot 1"
          width={500}
          height={300}
          style={{ borderRadius: "12px" }}
        />
        <Image
          src="/images/movieposters.png"
          alt="Project Screenshot 2"
          width={500}
          height={300}
          style={{ borderRadius: "12px" }}
        />
        <Image
          src="/images/moviesoundtracks.png"
          alt="Project Screenshot 3"
          width={500}
          height={300}
          style={{ borderRadius: "12px" }}
        />
        <Image
          src="/images/movietrailers.png"
          alt="Project Screenshot 4"
          width={500}
          height={300}
          style={{ borderRadius: "12px" }}
        />
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
    </div>
  );
}
