import { collection, onSnapshot, query, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { auth, db } from "../firebase/config";
import "./components.css";
import { useAuthContext } from "./hooks/useAuthContext";
import "react-responsive-modal/styles.css";
import VoteEntryDraw from "./VoteEntryDraw";
import ModalImage from "react-modal-image";

export default function DrawingFinalists() {
  const href = window.location.pathname;
  const [drawings, setDrawings] = useState([]);
  const { user } = useAuthContext(auth);

  const handleClickScroll = () => {
    const voteRegisterSection = document.getElementById("vote");
    if (voteRegisterSection) {
      voteRegisterSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  /* useEffect(() => {
    const drawingRef = collection(db, "dibujo");
    const q = query(drawingRef);
    onSnapshot(q, (snapshot) => {
      const drawings = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setDrawings(drawings);
      console.log(drawings);
    });
  }, []);
 */

  useEffect(() => {
    const drawingRef = collection(db, "dibujo");
    const q = query(drawingRef);
    getDocs(q).then((querySnapshot) => {
      const drawings = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setDrawings(drawings);
      console.log(drawings);
    });
  }, []);

  return (
    <>
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
        {drawings.length === 0 ? (
          <>
            <p>{href === "/" ? "Register to vote" : "Registrate para votar"}</p>
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
          </>
        ) : (
          drawings.map(({ id, title, author, imageURL, votes }) => (
            <div key={id} className="entry-details">
              <ModalImage
                className="image-entries"
                small={imageURL}
                large={imageURL}
                alt={title}
                hideDownload="true"
                hideZoom="true"
              />

              <div className="art-data">
                <div className="art-details">
                  <div className="finalist-title">{title}</div>
                </div>
                <div className="tooltip">
                  {user && <VoteEntryDraw id={id} votes={votes} />}
                  {!user && (
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
                        <div className="votes-number">{votes?.length}</div>
                        <span className="tooltiptext">
                          {href === "/"
                            ? "Register to vote"
                            : "Registrate para votar"}
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
}
