import React from "react";
import "react-responsive-modal/styles.css";
import ModalImage from "react-modal-image";

function Allnocount() {
  const href = window.location.pathname;
  const handleClickScroll = () => {
    const voteRegisterSection = document.getElementById("vote");
    if (voteRegisterSection) {
      voteRegisterSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="padding-main-container vote-widget">
        <div className="categoria-container">
          <img
            className="categoria-logo "
            src="media/votacion/ilustracionLogo.svg"
            alt="logo-ilustracion"
          ></img>
          {href === "/" ? (
            <img
              className="categoria-nombre"
              src="media/votacion/finalistsDI.svg"
              alt="categorie-ilustracion"
            ></img>
          ) : (
            <img
              className="categoria-nombre"
              src="media/votacion/finalistasDI.svg"
              alt="categorie-ilustracion"
            ></img>
          )}
        </div>

        <div className="entries">
          <div className="entry-details">
            <div>
              <ModalImage
                className="image-entries"
                small="media/votacion-finalists/il1.jpg"
                large="media/votacion-finalists/il1.jpg"
                alt="Heroes Wanted"
                hideDownload="true"
                hideZoom="true"
              />
              <div className="art-data">
                <div className="art-details">
                  <div className="finalist-title">Heroes Wanted</div>
                </div>
                <div className="tooltip">
                  <div className="pe-2 counter">
                    <i
                      className={`fa fa-solid fa-thumbs-up`}
                      style={{
                        display: "inline",
                        cursor: "pointer",
                        color: null,
                        fontSize: "1.5rem",
                      }}
                    />
                    <div onClick={handleClickScroll}>
                      {/* <div className="votes-number">12</div> */}

                      <span className="tooltiptext">
                        {href === "/"
                          ? "Register to vote"
                          : "Registrate para votar"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="entry-details">
            <div>
              <ModalImage
                className="image-entries"
                small="media/votacion-finalists/il2.jpg"
                large="media/votacion-finalists/il2.jpg"
                alt="Inocente"
                hideDownload="true"
                hideZoom="true"
              />
              <div className="art-data">
                <div className="art-details">
                  <div className="finalist-title">Inocente</div>
                </div>
                <div className="tooltip">
                  <div className="pe-2 counter">
                    <i
                      className={`fa fa-solid fa-thumbs-up`}
                      style={{
                        display: "inline",
                        cursor: "pointer",
                        color: null,
                        fontSize: "1.5rem",
                      }}
                    />
                    <div onClick={handleClickScroll}>
                      {/* <div className="votes-number">120</div> */}

                      <span className="tooltiptext">
                        {href === "/"
                          ? "Register to vote"
                          : "Registrate para votar"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="entry-details">
            <div>
              <ModalImage
                className="image-entries"
                small="media/votacion-finalists/il3.jpg"
                large="media/votacion-finalists/il3.jpg"
                alt="Mi Ozono"
                hideDownload="true"
                hideZoom="true"
              />
              <div className="art-data">
                <div className="art-details">
                  <div className="finalist-title">Mi Ozono</div>
                </div>
                <div className="tooltip">
                  <div className="pe-2 counter">
                    <i
                      className={`fa fa-solid fa-thumbs-up`}
                      style={{
                        display: "inline",
                        cursor: "pointer",
                        color: null,
                        fontSize: "1.5rem",
                      }}
                    />
                    <div onClick={handleClickScroll}>
                      {/* <div className="votes-number">8</div> */}

                      <span className="tooltiptext">
                        {href === "/"
                          ? "Register to vote"
                          : "Registrate para votar"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="entry-details">
            <div>
              <ModalImage
                className="image-entries"
                small="media/votacion-finalists/il4.jpg"
                large="media/votacion-finalists/il4.jpg"
                alt="Off"
                hideDownload="true"
                hideZoom="true"
              />
              <div className="art-data">
                <div className="art-details">
                  <div className="finalist-title">Off</div>
                </div>
                <div className="tooltip">
                  <div className="pe-2 counter">
                    <i
                      className={`fa fa-solid fa-thumbs-up`}
                      style={{
                        display: "inline",
                        cursor: "pointer",
                        color: null,
                        fontSize: "1.5rem",
                      }}
                    />
                    <div onClick={handleClickScroll}>
                      {/* <div className="votes-number">28</div> */}

                      <span className="tooltiptext">
                        {href === "/"
                          ? "Register to vote"
                          : "Registrate para votar"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="entry-details">
            <div>
              <ModalImage
                className="image-entries"
                small="media/votacion-finalists/il5.jpg"
                large="media/votacion-finalists/il5.jpg"
                alt="Ojos de Gaia"
                hideDownload="true"
                hideZoom="true"
              />
              <div className="art-data">
                <div className="art-details">
                  <div className="finalist-title">Ojos de Gaia</div>
                </div>
                <div className="tooltip">
                  <div className="pe-2 counter">
                    <i
                      className={`fa fa-solid fa-thumbs-up`}
                      style={{
                        display: "inline",
                        cursor: "pointer",
                        color: null,
                        fontSize: "1.5rem",
                      }}
                    />
                    <div onClick={handleClickScroll}>
                      {/* <div className="votes-number">10</div> */}

                      <span className="tooltiptext">
                        {href === "/"
                          ? "Register to vote"
                          : "Registrate para votar"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="entry-details">
            <div>
              <ModalImage
                className="image-entries"
                small="media/votacion-finalists/il6.jpg"
                large="media/votacion-finalists/il6.jpg"
                alt="Juntos salvemos al planeta"
                hideDownload="true"
                hideZoom="true"
              />
              <div className="art-data">
                <div className="art-details">
                  <div className="finalist-title">
                    Juntos salvemos al planeta
                  </div>
                </div>
                <div className="tooltip">
                  <div className="pe-2 counter">
                    <i
                      className={`fa fa-solid fa-thumbs-up`}
                      style={{
                        display: "inline",
                        cursor: "pointer",
                        color: null,
                        fontSize: "1.5rem",
                      }}
                    />
                    <div onClick={handleClickScroll}>
                      {/* <div className="votes-number">43</div> */}

                      <span className="tooltiptext">
                        {href === "/"
                          ? "Register to vote"
                          : "Registrate para votar"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="categoria-container">
          <img
            className="categoria-logo"
            src="media/votacion/dibujoLogo.svg"
            alt="logo-dibujo"
          ></img>
          {href === "/" ? (
            <img
              className="categoria-nombre"
              src="media/votacion/finalistsDP.svg"
              alt="categorie-ilustracion"
            ></img>
          ) : (
            <img
              className="categoria-nombre"
              src="media/votacion/finalistasDP.svg"
              alt="categorie-ilustracion"
            ></img>
          )}
        </div>

        <div className="entries">
          <div className="entry-details">
            <div>
              <ModalImage
                className="image-entries"
                small="media/votacion-finalists/di1.jpg"
                large="media/votacion-finalists/di1.jpg"
                alt="¿Somos la raza más inteligente o somos plaga?"
                hideDownload="true"
                hideZoom="true"
              />
              <div className="art-data">
                <div className="art-details">
                  <div className="finalist-title">
                    ¿Somos la raza más inteligente o somos plaga?
                  </div>
                </div>
                <div className="tooltip">
                  <div className="pe-2 counter">
                    <i
                      className={`fa fa-solid fa-thumbs-up`}
                      style={{
                        display: "inline",
                        cursor: "pointer",
                        color: null,
                        fontSize: "1.5rem",
                      }}
                    />
                    <div onClick={handleClickScroll}>
                      {/* <div className="votes-number">78</div> */}

                      <span className="tooltiptext">
                        {href === "/"
                          ? "Register to vote"
                          : "Registrate para votar"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="entry-details">
            <div>
              <ModalImage
                className="image-entries"
                small="media/votacion-finalists/di2.jpg"
                large="media/votacion-finalists/di2.jpg"
                alt="Agujero Planetario"
                hideDownload="true"
                hideZoom="true"
              />
              <div className="art-data">
                <div className="art-details">
                  <div className="finalist-title">Agujero Planetario</div>
                </div>
                <div className="tooltip">
                  <div className="pe-2 counter">
                    <i
                      className={`fa fa-solid fa-thumbs-up`}
                      style={{
                        display: "inline",
                        cursor: "pointer",
                        color: null,
                        fontSize: "1.5rem",
                      }}
                    />
                    <div onClick={handleClickScroll}>
                      {/* <div className="votes-number">4</div> */}

                      <span className="tooltiptext">
                        {href === "/"
                          ? "Register to vote"
                          : "Registrate para votar"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="entry-details">
            <div>
              <ModalImage
                className="image-entries"
                small="media/votacion-finalists/di3.jpg"
                large="media/votacion-finalists/di3.jpg"
                alt="Respiro Profundo"
                hideDownload="true"
                hideZoom="true"
              />
              <div className="art-data">
                <div className="art-details">
                  <div className="finalist-title">Respiro Profundo</div>
                </div>
                <div className="tooltip">
                  <div className="pe-2 counter">
                    <i
                      className={`fa fa-solid fa-thumbs-up`}
                      style={{
                        display: "inline",
                        cursor: "pointer",
                        color: null,
                        fontSize: "1.5rem",
                      }}
                    />
                    <div onClick={handleClickScroll}>
                      {/* <div className="votes-number">14</div> */}

                      <span className="tooltiptext">
                        {href === "/"
                          ? "Register to vote"
                          : "Registrate para votar"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="entry-details">
            <div>
              <ModalImage
                className="image-entries"
                small="media/votacion-finalists/di4.jpg"
                large="media/votacion-finalists/di4.jpg"
                alt="Cada acción cuenta. En un cuadro también."
                hideDownload="true"
                hideZoom="true"
              />
              <div className="art-data">
                <div className="art-details">
                  <div className="finalist-title">
                    Cada acción cuenta. En un cuadro también.
                  </div>
                </div>
                <div className="tooltip">
                  <div className="pe-2 counter">
                    <i
                      className={`fa fa-solid fa-thumbs-up`}
                      style={{
                        display: "inline",
                        cursor: "pointer",
                        color: null,
                        fontSize: "1.5rem",
                      }}
                    />
                    <div onClick={handleClickScroll}>
                      {/* <div className="votes-number">28</div> */}

                      <span className="tooltiptext">
                        {href === "/"
                          ? "Register to vote"
                          : "Registrate para votar"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="entry-details">
            <div>
              <ModalImage
                className="image-entries"
                small="media/votacion-finalists/di5.jpg"
                large="media/votacion-finalists/di5.jpg"
                alt="Mar de plástico"
                hideDownload="true"
                hideZoom="true"
              />
              <div className="art-data">
                <div className="art-details">
                  <div className="finalist-title">Mar de plástico</div>
                </div>
                <div className="tooltip">
                  <div className="pe-2 counter">
                    <i
                      className={`fa fa-solid fa-thumbs-up`}
                      style={{
                        display: "inline",
                        cursor: "pointer",
                        color: null,
                        fontSize: "1.5rem",
                      }}
                    />
                    <div onClick={handleClickScroll}>
                      {/* <div className="votes-number">11</div> */}

                      <span className="tooltiptext">
                        {href === "/"
                          ? "Register to vote"
                          : "Registrate para votar"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="entry-details">
            <div>
              <ModalImage
                className="image-entries"
                small="media/votacion-finalists/di6.jpg"
                large="media/votacion-finalists/di6.jpg"
                alt="There are no gender boundaries in ozone layer protection"
                hideDownload="true"
                hideZoom="true"
              />
              <div className="art-data">
                <div className="art-details">
                  <div className="finalist-title">
                    There are no gender boundaries in ozone layer protection
                  </div>
                </div>
                <div className="tooltip">
                  <div className="pe-2 counter">
                    <i
                      className={`fa fa-solid fa-thumbs-up`}
                      style={{
                        display: "inline",
                        cursor: "pointer",
                        color: null,
                        fontSize: "1.5rem",
                      }}
                    />
                    <div onClick={handleClickScroll}>
                      {/* <div className="votes-number">43</div> */}

                      <span className="tooltiptext">
                        {href === "/"
                          ? "Register to vote"
                          : "Registrate para votar"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="entry-details">
            <div>
              <ModalImage
                className="image-entries"
                small="media/votacion-finalists/di7.jpg"
                large="media/votacion-finalists/di7.jpg"
                alt="El agujero"
                hideDownload="true"
                hideZoom="true"
              />
              <div className="art-data">
                <div className="art-details">
                  <div className="finalist-title">El Agujero</div>
                </div>
                <div className="tooltip">
                  <div className="pe-2 counter">
                    <i
                      className={`fa fa-solid fa-thumbs-up`}
                      style={{
                        display: "inline",
                        cursor: "pointer",
                        color: null,
                        fontSize: "1.5rem",
                      }}
                    />
                    <div onClick={handleClickScroll}>
                      {/* <div className="votes-number">1</div> */}

                      <span className="tooltiptext">
                        {href === "/"
                          ? "Register to vote"
                          : "Registrate para votar"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="entry-details">
            <div>
              <ModalImage
                className="image-entries"
                small="media/votacion-finalists/di8.jpg"
                large="media/votacion-finalists/di8.jpg"
                alt="Legado de la Revolución Industrial"
                hideDownload="true"
                hideZoom="true"
              />
              <div className="art-data">
                <div className="art-details">
                  <div className="finalist-title">
                    Legado de la Revolución Industrial
                  </div>
                </div>
                <div className="tooltip">
                  <div className="pe-2 counter">
                    <i
                      className={`fa fa-solid fa-thumbs-up`}
                      style={{
                        display: "inline",
                        cursor: "pointer",
                        color: null,
                        fontSize: "1.5rem",
                      }}
                    />
                    <div onClick={handleClickScroll}>
                      {/* <div className="votes-number">73</div> */}

                      <span className="tooltiptext">
                        {href === "/"
                          ? "Register to vote"
                          : "Registrate para votar"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="categoria-container">
          <img
            className="categoria-logo"
            src="media/votacion/fotoLogo.svg"
            alt="logo-camera"
          ></img>

          {href === "/" ? (
            <img
              className="categoria-nombre"
              src="media/votacion/finalistsPH.svg"
              alt="categorie-photography"
            ></img>
          ) : (
            <img
              className="categoria-nombre"
              src="media/votacion/finalistasFo.svg"
              alt="categorie-photography"
            ></img>
          )}
        </div>

        <div className="entries">
          <div className="entry-details">
            <div>
              <ModalImage
                className="image-entries"
                small="media/votacion-finalists/photo1.jpeg"
                large="media/votacion-finalists/photo1.jpeg"
                alt="El mundo se quema"
                hideDownload="true"
                hideZoom="true"
              />
              <div className="art-data">
                <div className="art-details">
                  <div className="finalist-title">El mundo se quema</div>
                </div>
                <div className="tooltip">
                  <div className="pe-2 counter">
                    <i
                      className={`fa fa-solid fa-thumbs-up`}
                      style={{
                        display: "inline",
                        cursor: "pointer",
                        color: null,
                        fontSize: "1.5rem",
                      }}
                    />
                    <div onClick={handleClickScroll}>
                      {/* <div className="votes-number">12</div> */}

                      <span className="tooltiptext">
                        {href === "/"
                          ? "Register to vote"
                          : "Registrate para votar"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="entry-details">
            <div>
              <ModalImage
                className="image-entries"
                small="media/votacion-finalists/photo2.jpeg"
                large="media/votacion-finalists/photo2.jpeg"
                alt="Lar"
                hideDownload="true"
                hideZoom="true"
              />
              <div className="art-data">
                <div className="art-details">
                  <div className="finalist-title">Lar</div>
                </div>
                <div className="tooltip">
                  <div className="pe-2 counter">
                    <i
                      className={`fa fa-solid fa-thumbs-up`}
                      style={{
                        display: "inline",
                        cursor: "pointer",
                        color: null,
                        fontSize: "1.5rem",
                      }}
                    />
                    <div onClick={handleClickScroll}>
                      {/* <div className="votes-number">6</div> */}

                      <span className="tooltiptext">
                        {href === "/"
                          ? "Register to vote"
                          : "Registrate para votar"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="entry-details">
            <div>
              <ModalImage
                className="image-entries"
                small="media/votacion-finalists/photo3.jpg"
                large="media/votacion-finalists/photo3.jpg"
                alt="Conexión terrestre"
                hideDownload="true"
                hideZoom="true"
              />
              <div className="art-data">
                <div className="art-details">
                  <div className="finalist-title">Conexión terrestre</div>
                </div>
                <div className="tooltip">
                  <div className="pe-2 counter">
                    <i
                      className={`fa fa-solid fa-thumbs-up`}
                      style={{
                        display: "inline",
                        cursor: "pointer",
                        color: null,
                        fontSize: "1.5rem",
                      }}
                    />
                    <div onClick={handleClickScroll}>
                      {/* <div className="votes-number">6</div> */}

                      <span className="tooltiptext">
                        {href === "/"
                          ? "Register to vote"
                          : "Registrate para votar"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="entry-details">
            <div>
              <ModalImage
                className="image-entries"
                small="media/votacion-finalists/photo4.jpg"
                large="media/votacion-finalists/photo4.jpg"
                alt="Su muerte, nuestra muerte"
                hideDownload="true"
                hideZoom="true"
              />
              <div className="art-data">
                <div className="art-details">
                  <div className="finalist-title">
                    Su muerte, nuestra muerte
                  </div>
                </div>
                <div className="tooltip">
                  <div className="pe-2 counter">
                    <i
                      className={`fa fa-solid fa-thumbs-up`}
                      style={{
                        display: "inline",
                        cursor: "pointer",
                        color: null,
                        fontSize: "1.5rem",
                      }}
                    />
                    <div onClick={handleClickScroll}>
                      {/* <div className="votes-number">39</div> */}

                      <span className="tooltiptext">
                        {href === "/"
                          ? "Register to vote"
                          : "Registrate para votar"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Allnocount;
