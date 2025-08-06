export default function AboutModal({ onClose }) {
  return (
    <div className="modal-backdrop">
      <div className="modal-content section">
        <button onClick={onClose} className="music-btn" style={{ float: "right" }}>
          ✖
        </button>
        <h2 style={{ textAlign: "center" }}>More About Me</h2>
        <p>
          I am a passionate developer based in NYC who loves creating visually engaging and user-friendly websites.
          I enjoy blending creativity with functionality to design digital experiences that feel intuitive and unique.
          From personal projects to collaborative work, I am driven by curiosity, problem-solving, and the excitement of
          bringing ideas to life through clean design and thoughtful interaction.
        </p>
      </div>
    </div>
  );
}
