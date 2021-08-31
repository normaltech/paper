import "./approach.css"

export default function Approach() {
  return (
    <div className="approachContainer">
      <div className="phrasesContainer">
        <div className="phrasetitle">
          OUR APPROACH
        </div>
        <p>
          Smart contracts will shape our financial future.
          We believe in data and rely on mathematical models to guide our investment strategies and products. 
          With a team of exceptional scientists we aim to be the most trusted company to bridge various ecosystems with market participators of all types.
        </p>
        <h3>Data Science</h3>
        <p>
          We use the scientific method, and model our investments after ideas and data.
        </p>
        <h3>Risk Management</h3>
        <p>
          Our scientists and developers in our ecosystem collectively help guide our way through a decentralized financial system. 
          Compared to our centralized predecessor, we are extremely careful and prioritize risk management to be only exposed to minimal probabilities of risk.
        </p>
        <h3>Transparency</h3>
        <p>
          We aim for full transparency and ethical behavior. Decentralization is not an excuse to work behind closed doors. Our team ensures the most communicative and transparent investments and projects.
        </p>
      </div>
      <div className="videoContainer">
        <video className="triangleVideo" loop={true} preload="auto" auto="true" playsInline={true} autoPlay={true} muted={true} id="myVideo">
          <source src="/assets/Website Graphics/Video/Triangle.mp4" type="video/mp4" />
          Sorry, your browser doesn't support embedded videos.
        </video>
      </div>
    </div>
  );
}