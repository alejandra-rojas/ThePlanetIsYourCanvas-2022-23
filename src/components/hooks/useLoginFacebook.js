import { useState } from "react";
import { auth } from "../../firebase/config";
import { signInWithPopup, FacebookAuthProvider } from "firebase/auth";

import { useAuthContext } from "./useAuthContext";

export const useLoginFacebook = () => {
  const [error, setError] = useState(null);
  const { dispatch } = useAuthContext();

  const signInWithFacebook = () => {
    const provider = new FacebookAuthProvider();
    signInWithPopup(auth, provider)
      .then((res) => {
        dispatch({ type: "LOGIN", payload: res.user });
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  return { error, signInWithFacebook };
};

/* const signInWithFacebook = () => {
  const provider = new FacebookAuthProvider();
  signInWithPopup(auth, provider)
    .then((res) => {
      dispatch({ type: "LOGIN", payload: res.user });
    })
    .catch((err) => {
      setError(err.message);
    });
};

return { error, signInWithFacebook }; */
