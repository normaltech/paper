import "./mailer.css"
import emailjs from "emailjs-com";

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
    
      return (
        <div className="mailerContainer">
        <form className="contact-form" onSubmit={sendEmail}>
          <label><p>Name</p></label>
          <input type="text" name="user_name" />
          <label><p>Email</p></label>
          <input type="email" name="user_email" />
          <label><p>Message</p></label>
          <textarea name="message" />
          <input className="form-control-btn" type="submit" value="Send"/>
        </form>
        </div>
      );
    }


