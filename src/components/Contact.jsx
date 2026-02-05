import {
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaWhatsapp,
  FaFacebook,
  FaEnvelope
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";

import "./Contact.css";

export default function Contact() {
  return (
    <section id="contact" className="contact">
        <div className="contact-box">
            <h2>Contact Me</h2>
            <p>Let’s connect and build something great together 🚀</p>

            <div className="contact-icons">
                <a href="https://www.instagram.com/zefanyadamar" target="_blank">
                    <FaInstagram />
                </a>

                <a href="https://www.linkedin.com/in/zefanya-damar-aristo-susilo-30791a23b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank">
                    <FaLinkedin />
                </a>

                <a href="https://github.com/zefanyadamar1923" target="_blank">
                    <FaGithub />
                </a>

                <a href="https://www.facebook.com/share/15jzQ9jFEe/" target="_blank">
                    <FaFacebook />
                </a>

                {/* X (Twitter) */}
                <a href="https://x.com/Damararisto1?t=6qrR-MU7LmcrJkAqtBUPbA&s=09" target="_blank">
                    <FaXTwitter />
                </a>

                <a href="zefanyadamar@gmail.com">
                    <FaEnvelope />
                </a>
            </div>
        </div>
    </section>
  );
}
