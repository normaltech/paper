import "./footbar.css"
/* eslint-disable-next-line */
export default function Footbar() {
  return (
    <footer class= "footer-distributed">
      <div class= "footer-left">

        <img className="logoImg" src="/assets/Artboard 6_1.png" alt="" />
       
        <p class="footer-links">
					<a class="link-1" href="https://www.naver.com">Home</a>
					<a href="https://www.naver.com">Approach</a>
					<a href="https://www.naver.com">About us</a>
					<a href="https://www.naver.com">FAQ</a>
					<a href="https://www.naver.com">Contact us</a>
				</p>
        
        <p> SLINK LABS © 2021 </p>
      </div>
    
      <div class="footer-right">

				<a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com">
          <i class="fa fa-facebook"></i></a>
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
