import { collection, onSnapshot, query } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { auth, db } from "../firebase/config";
import "./components.css";
import { useAuthContext } from "./hooks/useAuthContext";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import VoteEntryDraw from "./VoteEntryDraw";
import ModalImage from "react-modal-image";

export default function DrawingFinalists() {
  const href = window.location.pathname;
  const [drawings, setDrawings] = useState([]);
  const { user } = useAuthContext(auth);

  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  const bg = {
    overlay: {
      // background: "rgba(36, 123, 160, 0.3)",
    },
  };

  const handleClickScroll = () => {
    const voteRegisterSection = document.getElementById("vote");
    if (voteRegisterSection) {
      voteRegisterSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
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
        {/* <div className="logo-categoria"></div> */}
        {drawings.length === 0 ? (
          <p>Finalits are loading.</p>
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
                  {/* <div className="finalist-author">{author}</div> */}
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

// <img className="image-entries" src={imageURL} alt="title"></img>
