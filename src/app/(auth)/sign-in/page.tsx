"use client";
import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";
import { app, auth } from "@/lib/firebase";
import React, { useEffect, useState } from "react";

auth.useDeviceLanguage();
auth.languageCode = "en";

const Page = () => {
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [otp, setOtp] = React.useState("");
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.recaptchaVerifier = new RecaptchaVerifier(auth, "sign-in-button", {
        size: "invisible",
        callback: async(response: any) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          await getOtp();
        },
      });
    }
  }, []);

  const getOtp = async () => {
    const appVerifier = window.recaptchaVerifier;
    console.log("phone number", phoneNumber);
    setLoading(true);
    try {
        await signInWithPhoneNumber(auth, phoneNumber, appVerifier)
        .then((confirmationResult) => {
          // SMS sent. Prompt user to type the code from the message, then sign the
          // user in with confirmationResult.confirm(code).
          window.confirmationResult = confirmationResult;
          // ...
        })
        .catch((error) => {
          console.log("error in sending otp", error);
          // Error; SMS not sent
          // ...
        }) 
    } finally {
        setLoading(false);
    }
   
  };

  const verifyOtpAndSignIn = async () => {
    await window.confirmationResult
      .confirm(otp)
      .then((result: any) => {
        // User signed in successfully.
        const user = result.user;
        // ...
      })
      .catch((error: any) => {
        // User couldn't sign in (bad verification code?)
        // ...
      });
  };
  return (
    <div className="flex flex-col justify-start">
      <input
        id="sign-in-button"
        type="text"
        placeholder="Phone Number"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <button onClick={getOtp}>
      {loading ? "Sending..." : "Send OTP"}
      </button>
      <input
        type="text"
        placeholder="OTP"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
      />
      <button onClick={verifyOtpAndSignIn}>
        Verify OTP
      </button>
    </div>
  );
};

export default Page;
