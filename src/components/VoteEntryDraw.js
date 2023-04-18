import React from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useAuthContext } from "./hooks/useAuthContext";
import { auth, db } from "../firebase/config";
import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";

export default function VoteEntryDraw({ id, votes }) {
  const href = window.location.pathname;
  const { user } = useAuthContext(auth);

  const votesRef = doc(db, "dibujo", id);

  const handleLike = () => {
    if (votes?.includes(user.uid)) {
      updateDoc(votesRef, {
        votes: arrayRemove(user.uid),
      })
        .then(() => {
          console.log("unvoted");
          // Show toast message after removing vote
          toast.error(
            href === "/"
              ? "Vote removed. Refresh to see the changes"
              : "Voto eliminado. Actualiza para ver los cambios"
          );
        })
        .catch((e) => {
          console.log(e);
        });
    } else {
      updateDoc(votesRef, {
        votes: arrayUnion(user.uid),
      })
        .then(() => {
          console.log("voted");
          // Show toast message after successful vote
          toast.success(
            href === "/"
              ? "👍 Vote submitted. Refresh to see the changes"
              : "👍 Voto éxitoso. Actualiza para ver los cambios"
          );
        })
        .catch((e) => {
          console.log(e);
        });
    }
  };
  return (
    <div className="counter">
      <i
        className={`fa ${
          !votes?.includes(user.uid) ? "-regular" : "-solid"
        } fa-thumbs-up ${!votes?.includes(user.uid) ? "" : "wobble-ver-left"}`}
        style={{
          display: "inline",
          cursor: "pointer",
          fontSize: "1.5rem",
          color: votes?.includes(user.uid) ? "#E65D93" : "#546DA8",
        }}
        onClick={handleLike}
      />
    </div>
  );
}
