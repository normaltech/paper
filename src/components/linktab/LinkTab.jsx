import "./linktab.css"
export default function linkTab() {
  return (
    <div className="linksContainer">
      <div className="link" id="text">
        <h1 className="linkTitle">ShibaLink</h1>
        <p className="linkParagraph"> SLINK LABS funds and develops projects that generate revenue on various blockchains. We fill demand and distribute dividends to our supporters with a portion of revenue generated.</p>
      </div>
      <a href="https://app.uniswap.org/#/swap?outputCurrency=0x3de7148c41e3b3233f3310e794f68d8e70ca69af&use=V2">
        <div className="link">
          Trade $SLINK
        </div>
      </a>
      <a href="https://drive.google.com/file/d/1s2nQfV69V4uxNbVvgpjzLmzdqN5P_7rl/view">
        <div className="link">
          White Paper
        </div>
      </a>
      <a href="https://www.dextools.io/app/uniswap/pair-explorer/0x7524c27965b26d13152835349bd10cc75f4643f1">
        <div className="link">
          Live Chart
        </div>
      </a>
      <a href="">
        <div className="link">
          Merch
        </div>
      </a>
    </div>
  )
}
