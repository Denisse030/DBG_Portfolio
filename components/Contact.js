import { useState } from "react";
import ContactModal from "./ContactModal";
import Link from "next/link";

export default function Contact() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="section contact-section">
      <h3>Contact Me</h3>
      <p>
        <button onClick={() => setIsOpen(true)} className="music-btn">
          Click here to send me a message
        </button>
      </p>

      {isOpen && <ContactModal onClose={() => setIsOpen(false)} />}

      <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
        <h4>View My Resume</h4>
      </Link>
    </div>
  );
}
