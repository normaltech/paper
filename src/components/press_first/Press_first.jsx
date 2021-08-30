import "./press_first.css"

export default function press_first() {
  return (
    <div className="container">
        <div className="title">TITLE</div>
        <div className="item">
            <img className="left" src="/assets/press_Image/Business.png" alt="" />
            <h3>Business Insider</h3>
            <h1>The New and Rising Ethereum Token Eliminating Risks</h1>
            <a href="https://www.naver.com" height="50" width="50">
                <img src="/assets/arrow.png" alt="arrow"/>
            </a>
        </div>
        <div className="item">
        <img className="middle" src="/assets/press_Image/LA.png" alt="" />
        <h3>LA Weekly</h3>
            <h1>A Look into SLNKLABS: The Company Everyone is Talking About</h1>
            <a href="https://www.naver.com" height="50" width="50">
                <img src="/assets/arrow.png" alt="arrow"/>
            </a>
        </div>
        <div className="item">
        <img className="right" src="/assets/press_Image/yahoo.png" alt="" />
        <h3>Yahoo! Finance</h3>
            <h1>SLINK LABS: The Company Ushering You to Success</h1>
            <a href="https://www.naver.com" height="50" width="50">
                <img src="/assets/arrow.png" alt="arrow"/>
            </a>
        </div>
    </div>
  
  )
}
