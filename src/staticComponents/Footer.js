import React from "react";

function Footer() {
  const href = window.location.pathname;

  return (
    <>
      <div className="arrows-bottom"></div>
      <footer>
        <img
          src="media/SVG/logo-unep.svg"
          srcset="media/SVG/logo-unep.svg"
          alt="UN environment programme logo"
          width="66px"
          height="48px"
        />
        <img
          src="media/logo-ozone-action.png"
          alt="OzonAction programme logo"
          width="106px"
          height="48px"
        />
        <h1 className="footer-title">
          {href === "/"
            ? "The planet is your canvas!"
            : "El planeta es tu lienzo!"}
        </h1>
        <div className="footer-nav">
          <div className="social-media">
            <div className="follow-text">
              {href === "/" ? "Follow us:" : "Síguenos:"}
            </div>
            <a
              href="https://www.facebook.com/profile.php?id=100086390746628"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="media/SVG/icon-facebook.svg"
                srcset="media/SVG/icon-facebook.svg"
                alt="Facebook logo"
                width="31px"
                height="31px"
              />
            </a>
            <a
              href="https://www.instagram.com/theplanetisyourcanvas/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="media/SVG/icon-instagram.svg"
                srcset="media/SVG/icon-instagram.svg"
                alt="Instagram logo"
                width="31px"
                height="31px"
              />
            </a>
            <a href="mailto:theplanetisyourcanvas@gmail.com">
              <img
                src="media/SVG/icon-email.svg"
                srcset="media/SVG/icon-email.svg"
                alt="Email logo"
                width="31px"
                height="31px"
              />
            </a>
          </div>
          <div className="copy">
            {href === "/"
              ? "© by The planet is your canvas: Art contest for Latin America and the Caribbean 2022-2023"
              : "© por El planeta es tu lienzo: Concurso de arte para América Latina y el Caribe 2022-2023."}
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
