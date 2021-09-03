import Flickity from "flickity";
import "./slider.css"

export default function Slider() {
  return (
    <div className="carousel" data-flickity='{ "pageDots": false,"draggable": true, "groupCells": 3, "prevNextButtons": false, "wrapAround": true, "autoPlay": 3000}'>
      <div className="carousel-cell">
        <div className="bItems">20+ </div>
        <div className="spanItems">Petabytes data stored per year</div>
      </div>
      <div className="carousel-cell">
        <div className="bItems">$58B+ </div>
        <div className="spanItems">AUM</div>
      </div>
      <div className="carousel-cell">
        <div className="bItems">5Billion + </div>
        <div className="spanItems">Trades since inception</div>
      </div>
      <div className="carousel-cell">
        <div className="bItems">10,000+</div>
        <div className="spanItems">Data sources</div>
      </div>
      <div className="carousel-cell">
        <div className="bItems">75+</div>
        <div className="spanItems">Venture investments</div>
      </div>
      <div className="carousel-cell">
        <div className="bItems">8,000</div>
        <div className="spanItems">U.S exchange-listed equities</div>
      </div>
      <div className="carousel-cell">
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
      </div>
    </div>
  )
}