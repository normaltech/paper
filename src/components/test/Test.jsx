import "./test.css"
import Flickity from "flickity"

export default function Test() {
  var flkty = new Flickity(".carousel", {
    // options
    cellAlign: 'left',
  });
  return (
    //<div className="main-carousel" data-flickity='{ "imagesLoaded":"true", "autoPlay": "true", "watchCSS":"true","pageDots": false}'>
    <div class="main-carousel" data-flickity='{"imagesLoaded":true, "autoPlay":true,"pageDots": false,"cellAlign": "left"}'>

    <div className="carousel-cell">
			<img src="/assets/Website Graphics/Bubbles/cg.png"/>
      <h4>Business Inside</h4>
      <h3>The New and Rising Ethereum Token Eliminating Risks</h3>
      <img src="/assets/Website Graphics/Bubbles/cg.png" alt="DD"/>
	  </div>

    <div className="carousel-cell">
			<img src="/assets/Website Graphics/Bubbles/cg.png"/>
      <h4>Business Inside</h4>
      <h3>The New and Rising Ethereum Token Eliminating Risks</h3>
      <img src="/assets/Website Graphics/Bubbles/cg.png" alt="DD"/>
	  </div>

    <div className="carousel-cell">
			<img src="/assets/Website Graphics/Bubbles/cg.png"/>
      <h4>Business Inside</h4>
      <h3>The New and Rising Ethereum Token Eliminating Risks</h3>
      <img src="/assets/Website Graphics/Bubbles/cg.png" alt="DD"/>
	  </div>

    <div className="carousel-cell">
			<img src="/assets/Website Graphics/Bubbles/cg.png"/>
      <h4>Business Inside</h4>
      <h3>The New and Rising Ethereum Token Eliminating Risks</h3>
      <img src="/assets/Website Graphics/Bubbles/cg.png" alt="DD"/>
	  </div>

    <div className="carousel-cell">
			<img src="/assets/Website Graphics/Bubbles/cg.png"/>
      <h4>Business Inside</h4>
      <h3>The New and Rising Ethereum Token Eliminating Risks</h3>
      <img src="/assets/Website Graphics/Bubbles/cg.png" alt="DD"/>
	  </div>

    <div className="carousel-cell">
			<img src="/assets/Website Graphics/Bubbles/cg.png"/>
      <h4>Business Inside</h4>
      <h3>The New and Rising Ethereum Token Eliminating Risks</h3>
      <img src="/assets/Website Graphics/Bubbles/cg.png" alt="DD"/>
	  </div>

    </div>
  )
}
