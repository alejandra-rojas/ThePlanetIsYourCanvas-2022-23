import React from "react";
import "react-responsive-modal/styles.css";
import ModalImage from "react-modal-image";

function Winners() {
  const href = window.location.pathname;

  return (
    <>
      <div className="padding-main-container vote-widget">
        <div className="dottedline"></div>
        <p className="thank-you">
          {href === "/" ? (
            <>
              We thank all the participants for contributing to the promotion of
              environmental care through art and congratulate the winners for
              their talent and commitment to protecting the planet.
            </>
          ) : (
            <>
              Agradecemos a todos los y las participantes por contribuir a la
              promoción del cuidado del medio ambiente a través del arte y
              felicitamos a los ganadores por su talento y compromiso con la
              protección del planeta.
            </>
          )}
        </p>

        <div className="categoria-container">
          <img
            className="categoria-logo "
            src="media/votacion/ilustracionLogo.svg"
            alt="logo-ilustracion"
          ></img>
          {href === "/" ? (
            <img
              className="categoria-nombre"
              src="media/winners/winDIen.svg"
              alt="categorie-ilustracion-winners"
            ></img>
          ) : (
            <img
              className="categoria-nombre"
              src="media/winners/winDIes.svg"
              alt="categorie-ilustracion-winners"
            ></img>
          )}
        </div>

        <div className="category-winner">
          <div className="entry-details">
            <div>
              <ModalImage
                className="winner-entry"
                small="media/votacion-finalists/il3.jpg"
                large="media/votacion-finalists/il3.jpg"
                alt="Mi Ozono"
                hideDownload="true"
                hideZoom="true"
              />
              <div className="art-data">
                <div className="art-details">
                  <div className="winner-title">"Mi ozono"</div>
                  <div className="winner-name">Danna Paola Torrejón</div>
                  <div className="winner-country">México</div>
                  {href === "/" ? (
                    <img
                      className="firstplace-tag"
                      src="media/winners/illEN1.svg"
                      alt="categorie-ilustracion-winners"
                    ></img>
                  ) : (
                    <img
                      className="firstplace-tag"
                      src="media/winners/illES1.svg"
                      alt="categorie-ilustracion-winners"
                    ></img>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="entries">
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
                  <div className="finalist-title">"Off"</div>
                  <div className="finalist-name">Camila Alemany</div>
                  <div className="finalist-country">Brasil</div>
                  {href === "/" ? (
                    <img
                      className="finalist-tag"
                      src="media/winners/illEN2.svg"
                      alt="categorie-ilustracion-winners"
                    ></img>
                  ) : (
                    <img
                      className="finalist-tag"
                      src="media/winners/illES2.svg"
                      alt="categorie-ilustracion-winners"
                    ></img>
                  )}
                </div>
              </div>
            </div>
          </div>

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
                  <div className="finalist-title">"Heroes Wanted"</div>
                  <div className="finalist-name">Kirnan John</div>
                  <div className="finalist-country">Santa Lucía</div>
                  {href === "/" ? (
                    <img
                      className="finalist-tag"
                      src="media/winners/illEN3.svg"
                      alt="categorie-ilustracion-winners"
                    ></img>
                  ) : (
                    <img
                      className="finalist-tag"
                      src="media/winners/illES3.svg"
                      alt="categorie-ilustracion-winners"
                    ></img>
                  )}
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
                    "Juntos salvemos al planeta"
                  </div>
                  <div className="finalist-name">Norkelly Acosta</div>
                  <div className="finalist-country">República Dominicana</div>
                  {href === "/" ? (
                    <img
                      className="finalist-tag"
                      src="media/winners/illEN4.svg"
                      alt="categorie-ilustracion-winners"
                    ></img>
                  ) : (
                    <img
                      className="finalist-tag"
                      src="media/winners/illES4.svg"
                      alt="categorie-ilustracion-winners"
                    ></img>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="categoria-container padding-container">
          <img
            className="categoria-logo"
            src="media/votacion/dibujoLogo.svg"
            alt="logo-dibujo"
          ></img>
          {href === "/" ? (
            <img
              className="categoria-nombre"
              src="media/winners/winDRen.svg"
              alt="categorie-ilustracion"
            ></img>
          ) : (
            <img
              className="categoria-nombre"
              src="media/winners/winDRes.svg"
              alt="categorie-ilustracion"
            ></img>
          )}
        </div>

        <div className="category-winner">
          <div className="entry-details">
            <div>
              <ModalImage
                className="winner-entry"
                small="media/votacion-finalists/di3.jpg"
                large="media/votacion-finalists/di3.jpg"
                alt="Respiro Profundo"
                hideDownload="true"
                hideZoom="true"
              />
              <div className="art-data">
                <div className="art-details">
                  <div className="winner-title">"Respiro Profundo"</div>
                  <div className="winner-name">Noelia Vinueza</div>
                  <div className="winner-country">Ecuador</div>
                  {href === "/" ? (
                    <img
                      className="firstplace-tag"
                      src="media/winners/draEN1.svg"
                      alt="categorie-ilustracion-winners"
                    ></img>
                  ) : (
                    <img
                      className="firstplace-tag"
                      src="media/winners/draES1.svg"
                      alt="categorie-ilustracion-winners"
                    ></img>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="entries">
          <div className="entry-details">
            <div>
              <ModalImage
                className="image-entries"
                small="media/votacion-finalists/di6.jpg"
                large="media/votacion-finalists/di6.jpg"
                alt="No gender boundaries"
                hideDownload="true"
                hideZoom="true"
              />
              <div className="art-data">
                <div className="art-details">
                  <div className="finalist-title">
                    "There are no gender boundaries in ozone layer protection"
                  </div>
                  <div className="finalist-name">Kirsten Jade Rampersad</div>
                  <div className="finalist-country">Trinidad y Tobago</div>
                  {href === "/" ? (
                    <img
                      className="finalist-tag"
                      src="media/winners/draEN2.svg"
                      alt="categorie-ilustracion-winners"
                    ></img>
                  ) : (
                    <img
                      className="finalist-tag"
                      src="media/winners/draES2.svg"
                      alt="categorie-ilustracion-winners"
                    ></img>
                  )}
                </div>
              </div>
            </div>
          </div>

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
                    "¿Somos la raza más inteligente o somos plaga?"
                  </div>
                  <div className="finalist-name">Juan Carlos Azcona</div>
                  <div className="finalist-country">República Dominicana</div>
                  {href === "/" ? (
                    <img
                      className="finalist-tag"
                      src="media/winners/draEN3.svg"
                      alt="categorie-ilustracion-winners"
                    ></img>
                  ) : (
                    <img
                      className="finalist-tag"
                      src="media/winners/draES3.svg"
                      alt="categorie-ilustracion-winners"
                    ></img>
                  )}
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
                  <div className="finalist-title">"Mar de Plástico"</div>
                  <div className="finalist-name">Andrés Bello</div>
                  <div className="finalist-country">Venezuela</div>
                  {href === "/" ? (
                    <img
                      className="finalist-tag"
                      src="media/winners/draEN4.svg"
                      alt="categorie-ilustracion-winners"
                    ></img>
                  ) : (
                    <img
                      className="finalist-tag"
                      src="media/winners/draES4.svg"
                      alt="categorie-ilustracion-winners"
                    ></img>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="categoria-container padding-container">
          <img
            className="categoria-logo"
            src="media/votacion/fotoLogo.svg"
            alt="logo-camera"
          ></img>

          {href === "/" ? (
            <img
              className="categoria-nombre"
              src="media/winners/winPOen.svg"
              alt="categorie-photography"
            ></img>
          ) : (
            <img
              className="categoria-nombre"
              src="media/winners/winPHes.svg"
              alt="categorie-photography"
            ></img>
          )}
        </div>

        <div className="category-winner">
          <div className="entry-details">
            <div>
              <ModalImage
                className="winner-entry"
                small="media/votacion-finalists/photo1.jpeg"
                large="media/votacion-finalists/photo1.jpeg"
                alt="El mundo se quema"
                hideDownload="true"
                hideZoom="true"
              />
              <div className="art-data">
                <div className="art-details">
                  <div className="winner-title">"El mundo se quema"</div>
                  <div className="winner-name">Isau César Valdez</div>
                  <div className="winner-country">México</div>
                  {href === "/" ? (
                    <img
                      className="firstplace-tag"
                      src="media/winners/phoEN1.svg"
                      alt="categorie-ilustracion-winners"
                    ></img>
                  ) : (
                    <img
                      className="firstplace-tag"
                      src="media/winners/phoES1.svg"
                      alt="categorie-ilustracion-winners"
                    ></img>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="entries">
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
                    "Su muerte, nuestra muerte"
                  </div>
                  <div className="finalist-name">Rodrigo Rico</div>
                  <div className="finalist-country">México</div>
                  {href === "/" ? (
                    <img
                      className="finalist-tag"
                      src="media/winners/phoEN2.svg"
                      alt="categorie-ilustracion-winners"
                    ></img>
                  ) : (
                    <img
                      className="finalist-tag"
                      src="media/winners/phoES2.svg"
                      alt="categorie-ilustracion-winners"
                    ></img>
                  )}
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
                  <div className="finalist-title">"Conexión terrestre"</div>
                  <div className="finalist-name">Alondra Lizeth Sánchez</div>
                  <div className="finalist-country">Chile</div>
                  {href === "/" ? (
                    <img
                      className="finalist-tag"
                      src="media/winners/phoEN3.svg"
                      alt="categorie-ilustracion-winners"
                    ></img>
                  ) : (
                    <img
                      className="finalist-tag"
                      src="media/winners/phoES3.svg"
                      alt="categorie-ilustracion-winners"
                    ></img>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* <div className="entry-details">
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
                  <div className="finalist-title">"Lar"</div>
                  <div className="finalist-name">---</div>
                  <div className="finalist-country">---</div>
                  {href === "/" ? (
                    <img
                      className="finalist-tag"
                      src="media/winners/phoEN4.svg"
                      alt="categorie-ilustracion-winners"
                    ></img>
                  ) : (
                    <img
                      className="finalist-tag"
                      src="media/winners/phoES4.svg"
                      alt="categorie-ilustracion-winners"
                    ></img>
                  )}
                </div>
              </div>
            </div>
          </div> */}
        </div>

        <div className="categoria-container padding-container">
          <img
            className="categoria-logo"
            src="media/votacion/videoLogo.svg"
            alt="logo-camera"
          ></img>

          {href === "/" ? (
            <img
              className="categoria-nombre"
              src="media/winners/winVIen.svg"
              alt="categorie-photography"
            ></img>
          ) : (
            <img
              className="categoria-nombre"
              src="media/winners/winVIes.svg"
              alt="categorie-photography"
            ></img>
          )}
        </div>

        <div className="category-winner">
          <div className="entry-details">
            <div>
              <div className="video-winner">
                <video controls>
                  <source src="media/winners/video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="art-data">
                <div className="art-details">
                  <div className="winner-title">
                    "La capa de ozono es frágil, protégela"
                  </div>
                  <div className="winner-name">Alejandro de Jesús García</div>
                  <div className="winner-country">Cuba</div>
                  {href === "/" ? (
                    <img
                      className="firstplace-tag"
                      src="media/winners/videoEN.svg"
                      alt="categorie-ilustracion-winners"
                    ></img>
                  ) : (
                    <img
                      className="firstplace-tag"
                      src="media/winners/videoES.svg"
                      alt="categorie-ilustracion-winners"
                    ></img>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Winners;
