import Flickity from "flickity";
import "./slider.css"

export default function Slider() {
  var flkty = new Flickity(".carousel", {
    // options
    cellAlign: 'left',
  });
  return (
    <div className="carousel" data-flickity='{ "pageDots": false,"draggable": true, "groupCells": 3, "prevNextButtons": false, "wrapAround": true, "autoPlay": 3000}'>
      <div className="carousel-cell">
        <b>20+ </b>
        <span>Petabytes data stored per year</span>
      </div>
      <div className="carousel-cell">
        <b>$58B+ </b>
        <span>AUM</span>
      </div>
      <div className="carousel-cell">
        <b>5Billion + </b>
        <span>Trades since inception</span>
      </div>
      <div className="carousel-cell"><b>10,000+</b>
        <span>Data sources</span>
      </div>
      <div className="carousel-cell"><b>75+</b>
        <span>Venture investments</span>
      </div>
      <div className="carousel-cell"><b>8,000</b>
        <span>U.S exchange-listed equities</span>
      </div>
      <div className="carousel-cell"><b>200+</b>
        <span>PhDs</span>
      </div>
      <div className="carousel-cell"><b>4,500+</b>
        <span>Person-years of R&D</span>
      </div>
      <div className="carousel-cell"><b>14</b>
        <span>Math Olympiad Medalists</span>
      </div>
    </div>
  )
}
