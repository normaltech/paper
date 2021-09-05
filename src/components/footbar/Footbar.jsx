import "./footbar.css"
/* eslint-disable-next-line */
export default function Footbar() {
  return (
    <footer class="footer-distributed">
      <div class="footer-left">

        <img className="flogoImg" src="/assets/footbarlogo.png" alt="" />
        <div className="listContainer">
          <div className="listTab">
            <ul>
              <h2 className="listHead">Business</h2>
              <li>Investment Management</li>
              <li>Investor Solutions</li>
              <li>Securities</li>
              <li>Impact</li>
            </ul>

          </div>
          <div className="listTab">
            <ul>
              <h2 className="listHead">Careers</h2>
              <li>Open roles</li>
              <li>Internships</li>
              <li>Interview tips</li>
            </ul>
          </div>

          <div className="listTab" id="productTab">
            <ul>
              <h2 className="listHead">Products</h2>
              <li>RugRelief</li>
              <li>BabyUni</li>
              <li>Fish in the Open Sea</li>
            </ul>
          </div>

          <div className="othersTab">
            <ul>
              <li>Contact us</li>
              <li>Offices</li>
              <li>Privacy policy</li>
            </ul>
          </div>
        </div>
        <p> SLINK LABS © 2021 </p>
      </div>

      <div class="footer-right">
        <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/SLINKLABS?s=20">
          <i class="fab fa-twitter"></i>
        </a>
        <a target="_blank" rel="noopener noreferrer" href="/">
          <i class="fab fa-instagram"></i>
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://t.me/SlinkLabs">
          <i class="fab fa-telegram"></i>
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://medium.com/@SLINKLABS">
          <i class="fa fa-github"></i>
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://discord.gg/PKWezNUUXx">
          <i class="fab fa-discord"></i>
        </a>
      </div>
    </footer>
  )
}
