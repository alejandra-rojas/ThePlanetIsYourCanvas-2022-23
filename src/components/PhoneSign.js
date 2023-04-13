import { useState } from "react";
import { auth } from "../firebase/config";
import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";
import { useAuthContext } from "./hooks/useAuthContext";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

function PhoneSign() {
  const href = window.location.pathname;
  const countryCode = "";
  const [phoneNumber, setPhoneNumber] = useState(countryCode);
  const [expandForm, setExpandForm] = useState(false);
  const [OTP, setOTP] = useState("");
  const { dispatch } = useAuthContext();

  const generateRecaptcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "invisible",
        callback: (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
        },
      },
      auth
    );
  };

  const requestOTP = (e) => {
    e.preventDefault();
    if (phoneNumber.length >= 10) {
      setExpandForm(true);
      generateRecaptcha();
      let appVerifier = window.recaptchaVerifier;
      signInWithPhoneNumber(auth, phoneNumber, appVerifier)
        .then((confirmationResult) => {
          // SMS sent. Prompt user to type the code from the message, then sign the
          // user in with confirmationResult.confirm(code).
          window.confirmationResult = confirmationResult;
          // ...
        })
        .catch((error) => {
          // Error; SMS not sent
          console.log(error);
        });
    } else {
      console.log("phone too long");
    }
  };

  const verifyOtp = (e) => {
    let otp = e.target.value;
    setOTP(otp);
    if (otp.length === 6) {
      let confirmationResult = window.confirmationResult;
      confirmationResult
        .confirm(otp)
        .then((result) => {
          // User signed in successfully.
          // const user = result.user;
          dispatch({ type: "LOGIN", payload: result.user });
          console.log("user signed in succesfully");
          // ...
        })
        .catch((error) => {
          // User couldn't sign in (bad verification code?)
          // ...
          console.log(error);
        });
    }
  };

  return (
    <div className="formContainer">
      <form onSubmit={requestOTP} className="formPhone">
        <div className="formTitle">
          {href === "/"
            ? "Sign in with mobile number"
            : "Registrate con un teléfono móvil"}
        </div>
        <div>
          <PhoneInput
            defaultCountry="PA"
            value={phoneNumber}
            onChange={setPhoneNumber}
            placeholder={
              href === "/" ? "Enter Mobile Number" : "Ingrese su teléfono móvil"
            }
          />
          {/* <label htmlFor="phoneNumberInput" className="form-label">
            Phone Number
          </label>
          <input
            type="tel"
            className="form-control"
            id="phoneNumberInput"
            aria-describedby="emailHelp"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          /> */}
          <div id="phoneNumberHelp" className="form-text">
            {href === "/"
              ? "Select your country and enter your mobile phone number."
              : "Seleccione su país e ingrese su número de teléfono móvil."}
          </div>
        </div>
        {expandForm === true ? (
          <>
            <div>
              <label htmlFor="otpInput" className="form-label">
                OTP
              </label>
              <input
                type="number"
                className="form-control"
                id="otpInput"
                value={OTP}
                onChange={verifyOtp}
              />
              <div id="otpHelp" className="form-text">
                {href === "/"
                  ? "Please enter the one time pin sent to your mobile. Message with the pin can take a couple of minutes to arrive."
                  : "Ingrese el código único enviado a su teléfono móvil. El mensaje con el código puede tardar un par de minutos en llegar."}
              </div>
            </div>
          </>
        ) : null}
        {expandForm === false ? (
          <button type="submit" className="btnOTP">
            {href === "/"
              ? "Request OTP"
              : "Solicita el código de verificación"}
          </button>
        ) : null}
        <div id="recaptcha-container"></div>
      </form>
    </div>
  );
}

export default PhoneSign;
