import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <img src=".\img\logoColor.png" alt="" className="imgLogoFooter"></img>
        <p>Hecho a mano con amor.</p>
        <div className="iconos">
          <a
            href="https://www.instagram.com/hazenves_/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src=".\img\facebook.png" alt=""></img>
          </a>
          <a
            href="https://www.instagram.com/hazenves_/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="./img/ig.png" alt="Instagram" />
          </a>
          <a href="mailto:mailto:hazenves1@gmail.com">
            <img src="./img/mail.png" alt="Enviar correo electrónico" />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
