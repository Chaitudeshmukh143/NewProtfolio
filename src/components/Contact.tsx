import { MdArrowOutward,  } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:rajeshchittyal21@gmail.com" data-cursor="disable">
                chaitudeshmukh143@gmail.com
              </a>
            </p>
            <h4>Phone</h4>
            <p>
              <a href="tel:+919767975564" data-cursor="disable">
                +91 97679 75564
              </a>
            </p>
            <h4>Education</h4>
            <p>BE In Information Technology</p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/Chaitudeshmukh143"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Github <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/chaitanya-deshmukh-628ab7204/"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Linkedin <MdArrowOutward />
            </a>
           
            <a
              href="https://www.instagram.com/deshmukh.chaitu?igsh=MXVjY29laDh6c3o5eA%3D%3D&utm_source=qr"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Instagram <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
            
            </h2>
            <h5>
              
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
