import "./press.css"

export default function press() {
  return (
    <div className="pressContainer">
      <div className="phraseContainer">
        <div className="phrase">
          PRESS
        </div>
        <div className="subDesc">
          Some of our partners that have listed our token on our tracking website and exchange. Click on them to view more information!
        </div>
      </div>
      <div className="siteBadgesContainer">
        <a href="https://www.coingecko.com/en/coins/shibalink">
          <div className="siteBadge">
            <img
              className="siteBadgeImg"
              src="/assets/Website Graphics/Bubbles/cg.png"
              alt=""
            />
            <span className="siteName" >COINGECKO</span>
          </div>
        </a>
        <div className="siteBadge">
          <img
            className="siteBadgeImg"
            src="/assets/Website Graphics/Bubbles/Crypto News.png"
            alt=""
          />
          <span className="siteName">Crypto News</span>
        </div>
        <div className="siteBadge">
          <img
            className="siteBadgeImg"
            src="/assets/Website Graphics/Bubbles/CMC.png"
            alt=""
          />
          <span className="siteName">COINMARKETCAP</span>
        </div>
        <div className="siteBadge">
          <img
            className="siteBadgeImg"
            src="/assets/Website Graphics/Bubbles/Yahoo.png"
            alt=""
          />
          <span className="siteName">YAHOO! Finance</span>
        </div>
      </div>
    </div>
  )
}
