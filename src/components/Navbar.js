import React from "react";
import { useLoginGoogle } from "./hooks/useLoginGoogle";
import { useLogout } from "./hooks/useLogout";
import { useAuthContext } from "./hooks/useAuthContext";
import Login from "./Login";
import Signup from "./Signup";
import { useLoginFacebook } from "./hooks/useLoginFacebook";

export default function NavBar() {
  const { logout } = useLogout();
  const { user } = useAuthContext();
  const { signInWithGoogle } = useLoginGoogle();
  const { signInWithFacebook } = useLoginFacebook();

  return (
    <>
      <div className="sign-in">
        {!user && (
          <>
            <img
              className="deco"
              alt="wind-left"
              width="100px"
              src="media/SVG/aire-der-desk.svg"
            />
            <div className="google-btn" onClick={signInWithGoogle}>
              <div className="google-icon-wrapper">
                <img
                  className="google-icon"
                  alt="google-icon"
                  src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                />
              </div>
              <div className="btn-text">
                <b>Sign in with google</b>
              </div>
            </div>
          </>
        )}

        {!user && (
          <>
            <div className="google-btn" onClick={signInWithFacebook}>
              <div className="google-icon-wrapper">
                <img
                  className="google-icon"
                  alt="facebook-icon"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/64px-Facebook_f_logo_%282019%29.svg.png"
                />
              </div>
              <div className="btn-text">
                <b>Sign in with facebook</b>
              </div>
            </div>

            <img
              className="deco"
              alt="wind-left"
              width="100px"
              src="media/SVG/aire-izq-desk.svg"
            />
          </>
        )}

        {user && (
          <>
            <img
              className="deco"
              alt="wind-left"
              width="100px"
              src="media/SVG/aire-der-desk.svg"
            />
            <div className="logged-userInfo">
              <div>
                You are signed in as <br></br>
                {user.displayName || user.email}
              </div>

              <div onClick={logout} className="logout">
                LOGOUT
              </div>
            </div>
            <img
              className="deco"
              alt="wind-left"
              width="100px"
              src="media/SVG/aire-izq-desk.svg"
            />
          </>
        )}
      </div>
    </>
  );
}
