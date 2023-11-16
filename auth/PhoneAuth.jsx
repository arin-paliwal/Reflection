import { auth } from "@/firebase";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css'


export default function PhoneAuth() {
  const [Phone, setPhone] = useState("");
  const [otp, setotp] = useState("");
  const [user, setUser] = useState(null)
  const handleSubmitPhone = async() => {
    try {
      const recaptcha = new RecaptchaVerifier( "recaptcha", {},auth);
      const confirmation = await signInWithPhoneNumber(auth, Phone, recaptcha);
      console.log(confirmation);
      setUser(confirmation)
    } catch (error) {
        console.log(error);
    }
  };
  const handleOTPSubmit = async() => {
    try {
        const data=await user.confirm(otp);
        console.log(data);
    } catch (error) {
        console.log(error);
    }
  };
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-4">
        <div className="flex">
          <h1>Enter Phone Number</h1>
        </div>
        <div className="flex gap-4 items-center">
          <PhoneInput
            country={"in"}
            value={Phone}
            onChange={(Phone) => setPhone("+" + Phone)}
            className=""
          />
          <button onClick={handleSubmitPhone} className="bg-blue-500">Submit Phone</button>
        </div>
        <div id="recaptcha"></div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex">
          <h1>Enter OTP</h1>
        </div>
        <div className="flex gap-4 items-center">
        <input className="" value={otp} onChange={(event) => setotp(event.target.value)} />

          <button onClick={handleOTPSubmit}>Submit OTP</button>
        </div>
      </div>
    </div>
  );
}
