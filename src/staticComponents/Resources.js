import React from "react";

function Resources() {
  const href = window.location.pathname;

  return (
    <>
      <div className="padding-main-container">
        <div className="dottedline"></div>
        <div className="header-offset" id="resources"></div>
        <section className="resources">
          <div className="boxed-title">
            <img
              className="svg-inline"
              src="media/iconswhite/resources.svg"
              alt="icon of a sun"
              srcset="media/iconswhite/resources.svg"
              height="35px"
              width="auto"
            />
            <h2>{href === "/" ? "Resources" : "Recursos"}</h2>
          </div>
          <div className="resources-textcont">
            <p>
              {href === "/"
                ? "Have a look at our resources for creative people to get inspired."
                : "Inspírate en nuestra sección de “recursos para creativos”."}
            </p>
          </div>
        </section>

        <div className="resources-display" id="resources-active">
          <div className="resources-hidden">
            <div className="posters-wrapper">
              {href === "/" ? (
                <a
                  href="media/T&Cs/CONTEST-CRITERIA-ENGLISH-DESIGN.pdf"
                  target="_blank"
                  className="poster"
                >
                  <img
                    src="media/resources/English/PNG/icon-9-criteriaEN.jpg"
                    alt=""
                  />
                </a>
              ) : (
                <a
                  href="media/T&Cs/CRITERIA-ART-CONTEST-SPA.pdf"
                  target="_blank"
                  class="poster"
                >
                  <img src="media/resources/Esp/PNG/icono-9-criteriaES.jpg" />
                </a>
              )}

              {href === "/" ? (
                <a
                  href="media/resources/English/resourcesThePlanetisyourCanvas_pdf/Kigali_amendment_EN.pdf"
                  target="_blank"
                  className="poster"
                >
                  <img
                    src="media/resources/English/PNG/Icon-8-english.png"
                    alt=""
                  />
                </a>
              ) : (
                <a
                  href="media/resources/Esp/PDF/Kigali_amendment_SP.pdf"
                  target="_blank"
                  class="poster"
                >
                  <img src="media/resources/Esp/PNG/icono-8-esp.png" />
                </a>
              )}

              {href === "/" ? (
                <a
                  href="media/resources/English/PNG/Poster-6-english.png"
                  target="_blank"
                  className="poster"
                >
                  <img
                    src="media/resources/English/PNG/Icon-6-english.jpg"
                    alt=""
                  />
                </a>
              ) : (
                <a
                  href="media/resources/Esp/PNG/Afiches-6-esp.png"
                  target="_blank"
                  class="poster"
                >
                  <img src="media/resources/Esp/PNG/Icono-6-esp.jpg" />
                </a>
              )}

              {href === "/" ? (
                <a
                  href="media/resources/English/PNG/Poster-5-english.png"
                  target="_blank"
                  className="poster"
                >
                  <img
                    src="media/resources/English/PNG/Icon-5-english.jpg"
                    alt=""
                  />
                </a>
              ) : (
                <a
                  href="media/resources/Esp/PNG/Afiches-5-esp.png"
                  target="_blank"
                  class="poster"
                >
                  <img src="media/resources/Esp/PNG/Icono-5-esp.jpg" />
                </a>
              )}

              {href === "/" ? (
                <a
                  href="media/resources/English/PNG/Poster-1-english.png"
                  target="_blank"
                  rel="noreferrer"
                  className="poster"
                >
                  <img
                    src="media/resources/English/PNG/Icon-1-english.jpg"
                    alt=""
                  />
                </a>
              ) : (
                <a
                  href="media/resources/Esp/PNG/Afiches-1-esp.png"
                  target="_blank"
                  rel="noreferrer"
                  class="poster"
                >
                  <img src="media/resources/Esp/PNG/Icono-1-esp.jpg" alt="" />
                </a>
              )}

              {href === "/" ? (
                <a
                  href="media/resources/English/PNG/Poster-2-english.png"
                  target="_blank"
                  rel="noreferrer"
                  className="poster"
                >
                  <img
                    src="media/resources/English/PNG/Icon-2-english.jpg"
                    alt=""
                  />
                </a>
              ) : (
                <a
                  href="media/resources/Esp/PNG/Afiches-2-esp.png"
                  target="_blank"
                  rel="noreferrer"
                  class="poster"
                >
                  <img src="media/resources/Esp/PNG/Icono-2-esp.jpg" />
                </a>
              )}

              {href === "/" ? (
                <a
                  href="media/resources/English/PNG/Poster-3-english.png"
                  target="_blank"
                  rel="noreferrer"
                  className="poster"
                >
                  <img
                    src="media/resources/English/PNG/Icon-3-english.jpg"
                    alt=""
                  />
                </a>
              ) : (
                <a
                  href="media/resources/Esp/PNG/Afiches-3-esp.png"
                  target="_blank"
                  rel="noreferrer"
                  class="poster"
                >
                  <img src="media/resources/Esp/PNG/Icono-3-esp.jpg" />
                </a>
              )}

              {href === "/" ? (
                <a
                  href="media/resources/English/PNG/Poster-4-english.png"
                  target="_blank"
                  rel="noreferrer"
                  className="poster"
                >
                  <img
                    src="media/resources/English/PNG/Icon-4-english.jpg"
                    alt=""
                  />
                </a>
              ) : (
                <a
                  href="media/resources/Esp/PNG/Afiches-4-esp.png"
                  target="_blank"
                  rel="noreferrer"
                  class="poster"
                >
                  <img src="media/resources/Esp/PNG/Icono-4-esp.jpg" />
                </a>
              )}

              <a
                href="https://heyzine.com/flip-book/15cf103a44.html#page/1"
                target="_blank"
                rel="noreferrer"
                className="poster"
              >
                <img src="media/resources/ProtectionTheOzoneLayer.png" />
              </a>
              <iframe
                width="560"
                height="277"
                loading="lazy"
                src="https://www.youtube.com/embed/sPC8o1rxQ_I"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              <iframe
                width="560"
                height="277"
                loading="lazy"
                src="https://www.youtube.com/embed/sTCnJa_P8xY"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                width="560"
                height="277"
                loading="lazy"
                src="https://www.youtube.com/embed/VXRcGGm1DtI"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                width="560"
                height="277"
                loading="lazy"
                src="https://www.youtube.com/embed/Ttv-OcvnsaY"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                width="560"
                height="277"
                loading="lazy"
                src="https://www.youtube.com/embed/MgUobxtdm4A"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                width="560"
                height="277"
                loading="lazy"
                src="https://www.youtube.com/embed/GeBvmBvWVgM"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                width="560"
                height="277"
                loading="lazy"
                src="https://www.youtube.com/embed/RYpyVPx5HKE"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            <div className="form-text">
              <a
                href="/media/resources/English/resourcesThePlanetisyourCanvas_pdf.zip"
                attributes-list
                download
              >
                {href === "/"
                  ? "Download resources pack."
                  : "Descarga los recursos."}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Resources;
