import "./mailer.css"
import emailjs from "emailjs-com";
import $ from "jquery";

export default function Mailer(){
    
    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_62rrrru', 'template_n19exkj', e.target, 'user_z2Ld48CfkLWCe5PiLdeSt')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      }

         // 폼 리셋 코드 수정해야됨 
         function resetForm(){
          const form = document.getElementById("contact-form");
          $('form').each(function(){
            this.reset();
          });
        }
    
      return (
        <div className="mailerContainer">
        <div className="mailerTitle">
          <h1>Contact us</h1>
        </div>
        <div className="mailerForm">
        <form className="contact-form" onSubmit={sendEmail,resetForm}>
          <label><p>Name</p></label>
          <input type="text" className="textInput" name="user_name" placeholder="Your name" required/>
          <label><p>Email</p></label>
          <input type="email" className="textInput" name="user_email" placeholder="Your address" required/>
          <label><p>Message</p></label>
          <textarea name="message" className="messageInput" placeholder="Message" required max-rows="-1" resize="none"/>
          <br></br>
          <input className="form-control-btn" type="submit" value="Send" required/>
        </form>
        </div>
        </div>
      );
    }


