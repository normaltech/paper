import "./footbar.css"
/* eslint-disable-next-line */
export default function Footbar() {
  return (
    <footer class="footer-distributed">
      <div class="footer-left">

        <img className="flogoImg" src="/assets/Artboard 2.png" alt="" />
        <div className="listContainer">
          <div className="listTab">
            <ul>
              <h2 className="listHead">Business</h2>
              <li>Investment Management</li>
              <li>Investor Solutions</li>
              {/* <li>Sightway Capital</li>
              <li>Real Estate</li>
              <li>Insurance Quantified</li>
              <li>Ventures</li> */}
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

        {/* <p class="footer-links">
          <a class="link-1" href="https://www.naver.com">Home</a>
          <a href="https://www.naver.com">Approach</a>
          <a href="https://www.naver.com">About us</a>
          <a href="https://www.naver.com">FAQ</a>
          <a href="https://www.naver.com">Contact us</a>
        </p> */}
        <p> SLINK LABS © 2021 </p>
      </div>

      <div class="footer-right">
        <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com">
          <i class="fab fa-facebook-f"></i></a>
        <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com">
          <i class="fab fa-instagram"></i></a>
        <a target="_blank" rel="noopener noreferrer" href="https://www.telegram.com">
          <i class="fab fa-telegram"></i></a>
        <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com">
          <i class="fa fa-github"></i></a>
      </div>
    </footer>
  )
}
