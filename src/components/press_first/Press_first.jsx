import "./press_first.css"

export default function press_first() {
  return (
    <div className="container">
      <div className="itemsContainer">
        <div className="item">
          <img className="itemImg" src="/assets/press_Image/Business.png" alt="" />
          <div className="articleTitle">Business Insider</div>
          <div className="article">The New and Rising Ethereum Token Eliminating Risks</div>
          <a href="https://www.naver.com" height="50" width="50">
            <img className="arrowImg" src="/assets/arrow.png" alt="arrow" />
          </a>
        </div>
        <div className="item">
          <img className="itemImg" src="/assets/press_Image/LA.png" alt="" />
          <div className="articleTitle">LA Weekly</div>
          <div className="article">A Look into SLNKLABS: The Company Everyone is Talking About</div>
          <a href="https://www.naver.com" height="50" width="50">
            <img className="arrowImg" src="/assets/arrow.png" alt="arrow" />
          </a>
        </div>
        <div className="item">
          <img className="itemImg" src="/assets/press_Image/yahoo.png" alt="" />
          <div className="articleTitle">Yahoo! Finance</div>
          <div className="article">SLINK LABS: The Company Ushering You to Success</div>
          <a href="https://www.naver.com" height="50" width="50">
            <img className="arrowImg" src="/assets/arrow.png" alt="arrow" />
          </a>
        </div>
      </div>
    </div>

  )
}
