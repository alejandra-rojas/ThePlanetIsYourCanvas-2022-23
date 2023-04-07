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
        <div className="formTitle">Sign in with mobile number</div>
        <div>
          <PhoneInput
            defaultCountry="PA"
            value={phoneNumber}
            onChange={setPhoneNumber}
            placeholder="Enter Mobile Number"
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
            Select your country and enter your mobile phone number.
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
                Please enter the one time pin sent to your mobile. Message with
                the pin can take a couple of minutes to arrive.
              </div>
            </div>
          </>
        ) : null}
        {expandForm === false ? (
          <button type="submit" className="btnOTP">
            Request OTP
          </button>
        ) : null}
        <div id="recaptcha-container"></div>
      </form>
    </div>
  );
}

export default PhoneSign;
