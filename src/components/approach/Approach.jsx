import "./approach.css"

export default function Approach() {
  return (
    <div className="approachContainer">
      <div className="phrasesContainer">
        <div className="phrasearticle">
          <div className="phraseline">
            <span id="slinkLabsBold">SLINK LABS</span>
            <span> is a platform for early developers and adapters.</span> 
          </div>
          <br />
          <div className="phraseline">Successful project candidates are to participate in the Slink Accelerator Program ( SAP ), which provides them with development resources. </div>
          <br />
          <div className="phraseline">Within the first week of launch, our contracts will be available across all networks. We will assist developers in enabling this in their token to simplify connectivity to other networks.</div>
        </div>
      </div>
      <div className="videoContainer">
        <video className="triangleVideo" loop={true} preload="auto" auto="true" playsInline={true} autoPlay={true} muted={true} id="myVideo">
          <source src="/assets/Website Graphics/Video/SLINK BG Video.mp4" type="video/mp4" />
          Sorry, your browser doesn't support embedded videos.
        </video>
      </div>
    </div>
  );
}