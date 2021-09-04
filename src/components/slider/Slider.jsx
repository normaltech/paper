import Flickity from "flickity";
import "./slider.css"

export default function Slider() {
  return (
    <div className="carousel" data-flickity='{ "pageDots": false,"draggable": true, "groupCells": 3, "prevNextButtons": false, "wrapAround": true, "autoPlay": 3000}'>
      <div className="carousel-cell">
        <div className="bItems">100+</div>
        <div className="spanItems">data sources</div>
      </div>
      <div className="carousel-cell">
        <div className="bItems">10+</div>
        <div className="spanItems">IPO investments</div>
      </div>
      <div className="carousel-cell">
        <div className="bItems">$1.3 million+</div>
        <div className="spanItems">under management</div>
      </div>
      <div className="carousel-cell">
        <div className="bItems">10+</div>
        <div className="spanItems">employees</div>
      </div>
      <div className="carousel-cell">
        <div className="bItems">Listed on</div>
        <div className="spanItems">CMC and CoinGecko</div>
      </div>
      <div className="carousel-cell">
        <div className="bItems">Decentralized</div>
        <div className="spanItems">swapping platform</div>
      </div>
      {/* <div className="carousel-cell">
        <div className="bItems">200+</div>
        <div className="spanItems">PhDs</div>
      </div>
      <div className="carousel-cell">
        <div className="bItems">4,500+</div>
        <div className="spanItems">Person-years of R&D</div>
      </div>
      <div className="carousel-cell">
        <div className="bItems">14</div>
        <div className="spanItems">Math Olympiad Medalists</div>
      </div> */}
    </div>
  )
}