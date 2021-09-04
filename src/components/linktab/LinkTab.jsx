import "./linktab.css"
export default function linkTab() {
  return (
    <div className="linksContainer">
      <div className="merchContainer">
        <div className="linkPhrase" id="text">
          <div className="linkTitle">SLinkLabs</div>
          <p className="linkParagraph"> SLINK LABS funds and develops projects that generate revenue on various blockchains. We fill demand and distribute dividends to our supporters with a portion of revenue generated.</p>
        </div>
        <div className="linksTabContainer">
          <a rel="noopener noreferrer" target="_blank" href="https://app.uniswap.org/#/swap?outputCurrency=0xeb494890465f49c2b94457d9b61811392e5b1fea&use=V2">
            <div className="link">
              Trade $SLAB
            </div>
          </a>
          <a rel="noopener noreferrer" target="_blank" href="https://drive.google.com/file/d/1jnUgjrBwLwYhYzW4WAhJdJ5mVdnRPgBK/view">
            <div className="link">
              White Paper
            </div>
          </a>
          <a rel="noopener noreferrer" target="_blank" href="https://www.dextools.io/app/ether/pair-explorer/0x8df3d24839d35b56d9330deab9ed1908ac52a6c1">
            <div className="link">
              <div>Live</div>
              <div>Chart</div>    
            </div>
          </a>
        </div>
      </div>
      <div className="challengeImgDiv">
        <img className="challengeImg" src="/assets/Website Graphics/Tokenomics/Challenge.png" alt="challengeImg" />
      </div>
    </div>
  )
}
