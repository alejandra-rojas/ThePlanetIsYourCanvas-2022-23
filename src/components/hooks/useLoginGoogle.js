import { useState } from "react";
import { auth } from "../../firebase/config";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

import { useAuthContext } from "./useAuthContext";

export const useLoginGoogle = () => {
  const [error, setError] = useState(null);
  const { dispatch } = useAuthContext();

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((res) => {
        dispatch({ type: "LOGIN", payload: res.user });
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  return { error, signInWithGoogle };
};
