import "./landingpage.css"

export default function Landingpage() {
  const countDownTimer = function (id, date) {
    var _vDate = new Date(date); // 전달 받은 일자 
    var _second = 1000;
    var _minute = _second * 60;
    var _hour = _minute * 60;
    var _day = _hour * 24;
    var timer;
    function showRemaining() {
      var now = new Date();
      var distDt = _vDate - now;
      if (distDt < 0) {
        clearInterval(timer);
        document.getElementById(id).innerHTML = 'www.slinklabs.com' + '<br/>' + 'Now open';
        return;
      }
      var days = Math.floor(distDt / _day);
      var hours = Math.floor((distDt % _day) / _hour);
      var minutes = Math.floor((distDt % _hour) / _minute);
      var seconds = Math.floor((distDt % _minute) / _second);
      //document.getElementById(id).textContent = date.toLocaleString() + "까지 : ";

      document.getElementById("dayBox1").textContent = String(parseInt(days / 10));
      document.getElementById("dayBox2").textContent = String(days % 10);
      document.getElementById("hourBox1").textContent = String(parseInt(hours / 10));
      document.getElementById("hourBox2").textContent = String(hours % 10);
      document.getElementById("minBox1").textContent = String(parseInt(minutes / 10));
      document.getElementById("minBox2").textContent = String(minutes % 10);
      document.getElementById("secBox1").textContent = String(parseInt(seconds / 10));
      document.getElementById("secBox2").textContent = String(seconds % 10);
    }
    timer = setInterval(showRemaining, 1000);
  }
  // var dateObj = new Date(); 
  // dateObj.setDate(dateObj.getDate() + 1); 
  // countDownTimer('sample01', dateObj); // 내일까지 
  countDownTimer('mainClock1', '09/06/2021 04:00 PM'); // 2024년 4월 1일까지, 시간을 표시하려면 01:00 AM과 같은 형식을 사용한다. 
  // countDownTimer('sample03', '04/01/2024'); // 2024년 4월 1일까지 
  // countDownTimer('sample04', '04/01/2019'); // 2024년 4월 1일까지

  let ended = false;
  console.log(ended);
  const endHandler = (e) => {
    const video_z = document.getElementsByClassName('landingTitleVideo');
    video_z[0].style.zIndex = -1;
    const topbar = document.getElementsByClassName('mainPage');
    topbar[0].style.visibility = "visible";

  }

  return (
    <>
      <div className="homepage">
        <video className="landingTitleVideo" onEnded={endHandler} preload="auto" auto="true" playsInline={true} autoPlay={true} muted={true} id="myVideo">
          <source src="/assets/Website Graphics/Video/Countdown.mp4" type="video/mp4" />
          Sorry, your browser doesn't support embedded videos.
        </video>
        <div className="mainPage">

          <div className="welcomeText">
            Coming Soon
          </div>
          <div className="mainClock" id="mainClock1">
            <div className="clockBox" id="daysBox">
              <div className="bigBox">
                <div className="smallBox" id="dayBox1"></div>
                <div className="smallBox" id="dayBox2"></div>
              </div>
              <div className="clockText">
                Days
              </div>
            </div>
            <div className="colonBox">:</div>
            <div className="clockBox" id="hoursBox">
              <div className="bigBox">
                <div className="smallBox" id="hourBox1"></div>
                <div className="smallBox" id="hourBox2"></div>
              </div>
              <div className="clockText">
                Hours
              </div>
            </div>
            <div className="colonBox">:</div>
            <div className="clockBox" id="minsBox">
              <div className="bigBox">
                <div className="smallBox" id="minBox1"></div>
                <div className="smallBox" id="minBox2"></div>
              </div>
              <div className="clockText">
                Minutes
              </div>
            </div>
            <div className="colonBox">:</div>
            <div className="clockBox" id="secsBox">
              <div className="bigBox">
                <div className="smallBox" id="secBox1"></div>
                <div className="smallBox" id="secBox2"></div>
              </div>
              <div className="clockText">
                Seconds
              </div>
            </div>
          </div>
          <img className="landingSlinkLogoImg" src="/assets/Website Graphics/Video/Countdown Logo Final.png" alt="" />
          <div class="landing-footer-right">
            <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/ShibaLinkToken">
              <i class="fab fa-twitter"></i></a>
            <a target="_blank" rel="noopener noreferrer" href="https://t.me/SlinkLabs">
              <i class="fab fa-telegram"></i></a>
            
            <div className="landingCopy"> SLINK LABS © 2021 </div>
          </div>

        </div>
      </div>
    </>
  )
}
