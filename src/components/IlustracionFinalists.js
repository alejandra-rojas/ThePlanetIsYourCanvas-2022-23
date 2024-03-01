import { collection, onSnapshot, query, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { auth, db } from "../firebase/config";
import "./components.css";
import { useAuthContext } from "./hooks/useAuthContext";
import VoteEntry from "./VoteEntry";
import "react-responsive-modal/styles.css";
import ModalImage from "react-modal-image";

export default function IlustracionFinalists() {
  const href = window.location.pathname;
  const [ilustraciones, setIlustraciones] = useState([]);
  const { user } = useAuthContext(auth);

  const handleClickScroll = () => {
    const voteRegisterSection = document.getElementById("vote");
    if (voteRegisterSection) {
      voteRegisterSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const ilustracionRef = collection(db, "ilustracion");
    const q = query(ilustracionRef);
    onSnapshot(q, (snapshot) => {
      const ilustraciones = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setIlustraciones(ilustraciones);
    });
  }, []);

  /*   useEffect(() => {
    const ilustracionRef = collection(db, "ilustracion");
    const q = query(ilustracionRef);
    getDocs(q).then((querySnapshot) => {
      const ilustraciones = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setIlustraciones(ilustraciones);
    });
  }, []); */

  return (
    <>
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
        {ilustraciones.length === 0 ? (
          <p>{href === "/" ? "Register to vote" : "Registrate para votar"}</p>
        ) : (
          ilustraciones.map(({ id, title, author, imageURL, votes }) => (
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
                  {user && <VoteEntry id={id} votes={votes} />}
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
