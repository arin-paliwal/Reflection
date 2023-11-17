import { auth } from "@/firebase";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { useEffect, useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import otpImage from "../../assets/images/webd.png";
import Image from "next/image";
import { useRouter } from "next/router";

export default function PhoneAuth() {
  const navigate=useRouter();
  const [Phone, setPhone] = useState("");
  const [otp, setotp] = useState("");
  const [user, setUser] = useState(null);
  const [move, setMove] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [finalbuttondisbled, setFinalbuttondisbled] = useState(false);
  const handleSubmitPhone = async () => {
    try {
      setButtonDisabled(true);
      const recaptcha = new RecaptchaVerifier("recaptcha", {}, auth);
      const confirmation = await signInWithPhoneNumber(auth, Phone, recaptcha);
      console.log(confirmation);
      recaptcha.clear();
      setUser(confirmation);
      setMove(true);
      setButtonDisabled(false);
    } catch (error) {
      console.log(error);
    }
  };
  const handleOTPSubmit = async () => {
    setFinalbuttondisbled(true);
    try {
      const data = await user.confirm(otp);
      console.log(data);
      setFinalbuttondisbled(false);
      alert("Phone Number Added & Verified")
      navigate.push("/")
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    console.log(move);
  }, [move]);

  return (
    <div className="flex flex-col gap-8 items-center justify-center h-[80%] w-[30%] rounded-lg bg-[#f5f5f5] p-4">
      {!move ? (
        <div className="flex flex-col gap-4">
          <div className="flex justify-center">
            <Image src={otpImage} alt="OTP-Image-Illustration" width={220} />
          </div>
          <div className="flex flex-col justify-center">
            <h1 className="text-xl flex justify-center">OTP Verification</h1>
            <h1 className="text-gray-400 flex justify-center text-center">
              You will receieve the OTP on the provided mobile number which will
              be validated on next screen
            </h1>
          </div>
          <div className="flex flex-col gap-4 items-center">
            <div className="flex justify-center">
              <PhoneInput
                country={"in"}
                value={Phone}
                onChange={(Phone) => setPhone("+" + Phone)}
                className=""
                placeholder="Enter"
              />
            </div>
            <button
              onClick={handleSubmitPhone}
              className={`w-[50%] bg-blue-600 hover:bg-black hover:text-white duration-300 transform-all text-white p-2 rounded-md flex items-center justify-center ${
                buttonDisabled === true ? "cursor-not-allowed" : ""
              }`}
            >
              Send OTP
            </button>
          </div>
          <div
            id={`${move === false ? "recaptcha" : ""}`}
            className="flex justify-center"
          ></div>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          <div className="flex justify-center">
            <Image src={otpImage} alt="OTP-Image-Illustration" width={220} />
          </div>
          <div className="flex flex-col justify-center">
            <h1 className="text-xl flex justify-center">OTP Validation</h1>
            <h1 className="text-gray-400 flex justify-center text-center">
              You should have receieved the OTP on the entered mobile number
              which will be validated here{" "}
            </h1>
          </div>

          <div className="flex flex-col gap-4 items-center">
            <div className="flex gap-[1rem] justify-center">
              {/* <label className="text-gray-400">Enter OTP</label> */}
              <input
                className="bg-[#e5e5e5] p-2 rounded-md flex justify-center items-center"
                placeholder="Enter OTP here!"
                value={otp}
                onChange={(event) => setotp(event.target.value)}
              />
            </div>
            <div className="flex justify-center">
              <button
                className={` bg-blue-600 hover:bg-black hover:text-white duration-300 transform-all text-white p-2 rounded-md flex items-center justify-center ${
                  finalbuttondisbled === true ? "cursor-not-allowed" : ""
                }`}
                onClick={handleOTPSubmit}
              >
                Submit OTP
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
