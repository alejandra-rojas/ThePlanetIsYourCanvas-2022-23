import { collection, onSnapshot, query } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { auth, db } from "../firebase/config";
import "./components.css";
import { useAuthContext } from "./hooks/useAuthContext";
import "react-responsive-modal/styles.css";
import ModalImage from "react-modal-image";
import VoteEntryVideo from "./VoteEntryVideo";

export default function VideoFinalists() {
  const [videos, setVideos] = useState([]);
  const { user } = useAuthContext(auth);
  const href = window.location.pathname;
  console.log(href);

  const handleClickScroll = () => {
    const voteRegisterSection = document.getElementById("vote");
    if (voteRegisterSection) {
      voteRegisterSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const photoRef = collection(db, "video");
    const q = query(photoRef);
    onSnapshot(q, (snapshot) => {
      const photos = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setVideos(photos);
      console.log(photos);
    });
  }, []);

  return (
    <>
      <div className="categoria-container">
        <img
          className="categoria-logo"
          src="media/votacion/videoLogo.svg"
          alt="logo-videocamera"
        ></img>
        {href === "/" ? (
          <img
            className="categoria-nombre"
            src="media/votacion/finalistsVI.svg"
            alt="categorie-video"
          ></img>
        ) : (
          <img
            className="categoria-nombre"
            src="media/votacion/finalistasVI.svg"
            alt="categorie-video"
          ></img>
        )}
      </div>

      <div className="entries">
        {videos.length === 0 ? (
          <p>Finalits are loading.</p>
        ) : (
          videos.map(({ id, title, author, imageURL, votes }) => (
            <div key={id} className="entry-details">
              <video
                className="video-entries"
                width="100%"
                height="100%"
                src={imageURL}
                controls
                controlsList="nodownload noplaybackrate"
                disablePictureInPicture
                muted
                autoPlay
                loading="lazy"
              ></video>

              <div className="art-data">
                <div className="art-details">
                  {/* <div className="finalist-author">{author}</div> */}
                  <div className="finalist-title">{title}</div>
                </div>
                <div className="tooltip">
                  {user && <VoteEntryVideo id={id} votes={votes} />}
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
