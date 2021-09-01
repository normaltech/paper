import "./topbar.css"

export default function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <div className="logo">
          <img className="logoImg" src="/assets/Artboard 3.png" alt="" />
          </div>
          <div className="brand">
          <img className="brandImg" src="/assets/Artboard 2.png" alt="" />
        </div>
      </div>
      <ul className="topbarRight">
        <li className="menu" id="home">Home</li>
        <li className="menu">Approach</li>
        <li className="menu">Business</li>
        <li className="menu">Insights</li>
        <li className="menu">SLINK Labs</li>
        <li className="menu">Careers</li>
        <li className="menu">Contact Us</li>
      </ul>
    </div>
  )
}
