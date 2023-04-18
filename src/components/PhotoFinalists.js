import { collection, onSnapshot, query, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { auth, db } from "../firebase/config";
import "./components.css";
import { useAuthContext } from "./hooks/useAuthContext";
import "react-responsive-modal/styles.css";
import ModalImage from "react-modal-image";
import VoteEntryPhoto from "./VoteEntryPhoto";

export default function PhotoFinalists() {
  const [photos, setPhotos] = useState([]);
  const { user } = useAuthContext(auth);
  const href = window.location.pathname;
  // console.log(href);

  const handleClickScroll = () => {
    const voteRegisterSection = document.getElementById("vote");
    if (voteRegisterSection) {
      voteRegisterSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const photoRef = collection(db, "foto");
    const q = query(photoRef);
    getDocs(q)
      .then((snapshot) => {
        const photos = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setPhotos(photos);
        // console.log(photos);
      })
      .catch((error) => {
        console.log("Error getting photos: ", error);
      });
  }, []);

  return (
    <>
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
        {photos.length === 0 ? (
          <>
            <p>{href === "/" ? "Register to vote" : "Registrate para votar"}</p>
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
          </>
        ) : (
          photos.map(({ id, title, author, imageURL, votes }) => (
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
                  {user && <VoteEntryPhoto id={id} votes={votes} />}
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
                        {/* <div className="votes-number">{votes?.length}</div> */}

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
