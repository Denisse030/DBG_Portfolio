import { useState } from "react";

export default function ContactModal({ onClose }) {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);
    formData.append("access_key", "3cc8f003-0562-4d51-9de1-7ebd2416cfa6"); // replace with your actual Web3Forms key

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully!");
      event.target.reset();
    } else {
      setResult("Something went wrong.");
    }
  };

  return (
    <div className="modal-backdrop">
      <div className="modal-content section">
        <button
          onClick={onClose}
          className="music-btn"
          style={{ float: "right" }}
        >
          ✖
        </button>
        <h2 style={{ textAlign: "center" }}>Send Me a Message</h2>

        <form onSubmit={onSubmit}>
          <input
            name="name"
            type="text"
            placeholder="Your Name"
            required
            className="form-input"
          />
          <input
            name="email"
            type="email"
            placeholder="Your Email"
            required
            className="form-input"
          />
          <textarea
            name="message"
            rows="6"
            placeholder="Your Message"
            required
            className="form-input"
          />
          <button type="submit" className="music-btn">
            Send
          </button>
          <p style={{ textAlign: "center" }}>{result}</p>
        </form>
      </div>
    </div>
  );
}
