import "./title.css"

export default function Title() {
  return (
    <div className="titleContainer">
      <div className="phrasesContainer">
        <div className="phrases">
          SLINK LABS funds and develops projects that generate revenue on various blockchains.
        </div>
      </div>
      <div className="videoContainer">
        <video className="Home_vid_bg__1nWKN" preload="auto" auto="true" playsInline={true} autoPlay={true} muted={true} id="myVideo">
          <source src="/assets/Website Graphics/Video/Website Video 3.mp4" type="video/mp4" />
          Sorry, your browser doesn't support embedded videos.
        </video>
      </div>
    </div>
  );
}