import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Header() {
  const href = window.location.pathname;

  // Active menu class on section scroll
  const [activeSection, setActiveSection] = useState("");

  const handleScroll = () => {
    const sections = document.querySelectorAll(".header-offset");
    const navLi = document.querySelectorAll("nav .container ul li");

    let current = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      if (window.pageYOffset >= sectionTop - 60) {
        current = section.getAttribute("id");
      }
    });

    navLi.forEach((li) => {
      li.classList.remove("active");
      if (li.classList.contains(current)) {
        li.classList.add("active");
      }
    });

    setActiveSection(current);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  // End of menu scroll

  const [menuIsShown, setMenuIsShown] = useState(true);

  const handleClick = (e) => {
    setMenuIsShown((current) => !current);
  };

  return (
    <header>
      <div className="header-container">
        <div className="lang-logo-ham">
          <div className="dropcontainer">
            <div className="dropdown">
              <button className="dropbtn">
                <img
                  src="media/SVG/language-icon.svg"
                  srcSet="media/SVG/language-icon.svg"
                  width="17px"
                  height="17px"
                  alt=""
                />
                {href === "/" ? "ENG" : "ESP"}
              </button>

              {href === "/" ? (
                <Link to="/es">
                  <div className="dropdown-content">
                    <span>ESP</span>
                  </div>
                </Link>
              ) : (
                <Link to="/">
                  <div className="dropdown-content">
                    <span>EN</span>
                  </div>
                </Link>
              )}
            </div>
          </div>

          {href === "/" ? (
            <>
              <img
                id="logo"
                className="logo animate__animated animate__flip"
                src="media/LOGO-CONCURSO-WEB.png"
                alt="Logo of contest. The background has the planet earth."
              />
            </>
          ) : (
            <>
              <img
                id="logo"
                className="logo animate__animated animate__flip"
                src="media/LOGO-CONCURSO-WEBES.png"
                alt="Logo of contest. The background has the planet earth."
              />
            </>
          )}

          <div className="ham-container" id="ham-button" onClick={handleClick}>
            <img
              src="media/SVG/ham-menu-icon.svg"
              srcSet="media/SVG/ham-menu-icon.svg"
              width="58px"
              height="26px"
              alt=""
            />
          </div>
        </div>

        <div className="twotiernav">
          <div className="lang-selector">
            <div className="dropdown">
              {href === "/" ? (
                <>
                  <button className="dropbtn">
                    <img
                      src="media/SVG/language-icon.svg"
                      srcSet="media/SVG/language-icon.svg"
                      width="22px"
                      height="22px"
                      alt=""
                    />
                    ENGlISH
                  </button>
                  <Link to="/es">
                    <div className="dropdown-content">
                      <a href="/">ESPAÑOL</a>
                    </div>
                  </Link>
                </>
              ) : (
                <>
                  <button className="dropbtn">
                    <img
                      src="media/SVG/language-icon.svg"
                      srcSet="media/SVG/language-icon.svg"
                      width="22px"
                      height="22px"
                      alt=""
                    />
                    ESPAÑOL
                  </button>
                  <Link to="/">
                    <div className="dropdown-content">
                      <a href="/es.html">ENGLISH</a>
                    </div>
                  </Link>
                </>
              )}
            </div>
          </div>

          <nav>
            <div
              className={`container ${menuIsShown ? "" : "ham-active1"}`}
              id="ham-active"
            >
              <ul className="nav-main">
                <li className="about active">
                  <a href="#about" role="menuitem">
                    <img
                      src="media/iconswhite/yellow/about.svg"
                      width="55px"
                      alt=""
                    />
                    {href === "/" ? "About" : "Acerca"}
                  </a>
                </li>
                <li className="rules">
                  <a href="#rules" role="menuitem">
                    <img
                      src="media/iconswhite/yellow/rules.svg"
                      width="73px"
                      alt=""
                    />
                    {href === "/" ? "Rules" : "Reglas"}
                  </a>
                </li>
                <li className="resources">
                  <a href="#resources" role="menuitem">
                    <img
                      src="media/iconswhite/yellow/resources.svg"
                      width="60px"
                      alt=""
                    />
                    {href === "/" ? "Resources" : "Recursos"}
                  </a>
                </li>
                <li className="participate">
                  <a href="#participate" role="menuitem">
                    <img
                      src="media/iconswhite/yellow/participate.svg"
                      height="70px"
                      alt=""
                    />
                    {href === "/" ? "Participate" : "Participa"}
                  </a>
                </li>
                <li className="vote">
                  <a href="#vote" role="menuitem">
                    <img
                      src="media/iconswhite/yellow/vote.svg"
                      width="40px"
                      alt=""
                    />
                    {href === "/" ? "Vote" : "Vota"}
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>

      <div className="arrows-top"></div>
    </header>
  );
}

export default Header;
