/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import Router, { useRouter } from 'next/router';
import amazon from "../../assets/images/amazon-pay.png"
import apple from "../../assets/images/apple-pay.png";
import google from "../../assets/images/google-pay.svg";


const styles = {
  wrapper: "h-[650px] w-[1350px] p-10 bg-[#E3F4F4] rounded-[50px]",
  heading: "flex items-center justify-between text-3xl text-[#2a9d8f]",
  page:"flex items-center justify-center h-screen bg-[#C4DFDF]",
  buyPremium:"max-w-2xl leading-10 text-2xl text-[#787878]",
  paymentCard:"mt-7 flex ml-auto ",
  content:"flex flex-row items-center",
  paymentLogos:"object-contain w-full h-full flex items-center justify-center"
  };
  
const GetPremium = () => {
  const router=useRouter();
  const confirmPurchase=()=>{
    router.push(`/confirm/Purchase`);
  }
  return (
    <div className={styles.page}>
      <div className={styles.wrapper}>
        <div className={styles.heading}>
          <h1>
            Immerse Yourself in a Vast and Exclusive Collection of Enlightening
            Blogs: Unlock{" "}
            <span className="text-black font-medium cursor-pointer ">
              Premium Subscription
            </span>{" "}
            to Access a Wealth of Knowledge and Unleash Your Curiosity
          </h1>
        </div>
        <div className={styles.content}>
          <div className={styles.buyPremium}>
            By unlocking our premium features, you will gain access to a
            treasure trove of exclusive benefits and valuable resources.
            <br />
            <br />
            ●&nbsp;Ad-free Experience<br></br>●&nbsp;Offline Reading
            <br /> ●&nbsp;Early Access
            <br />
            ●&nbsp;Priority Support
          </div>
          <div className={styles.paymentCard}>
            <div className="modal">
              <form className="form">
                <div className="paymentOptions">
                  <button name="Google Pay" type="button">
                    <Image
                      src={google}
                      onClick={confirmPurchase}
                      className={styles.paymentLogos}
                      alt="google-pay-logo"
                      width={70}
                    />
                  </button>{" "}
                  <button name="apple-pay" type="button">
                    <Image
                      src={apple}
                      onClick={confirmPurchase}
                      className={styles.paymentLogos}
                      alt="apple-pay-logo"
                    />
                  </button>{" "}
                  <button name="google-pay" type="button">
                    <Image
                      src={amazon}
                      onClick={confirmPurchase}
                      className={styles.paymentLogos}
                      alt="google-pay-logo"
                      width={70}
                    />
                  </button>
                </div>
                <div className="separator">
                  <hr className="line" />
                  <p className={styles.options}>or pay using credit card</p>
                  <hr className="line" />
                </div>
                <div className="credit-card-info--form">
                  <div className="input_container">
                    <label for="password_field" className="input_label">
                      Card Holder Full Name
                    </label>{" "}
                    <input
                      id="password_field"
                      className="input_field"
                      type="text"
                      name="input-name"
                      title="Inpit title"
                      placeholder="Arin Paliwal"
                    />
                  </div>
                  <div className="input_container">
                    <label for="password_field" className="input_label">
                      Card Number
                    </label>{" "}
                    <input
                      id="password_field"
                      className="input_field"
                      type="number"
                      name="input-name"
                      title="Inpit title"
                      placeholder="XXXX XXXX XXXX 7899"
                    />
                  </div>
                  <div className="input_container">
                    <label for="password_field" className="input_label">
                      Expiry Date / CVV
                    </label>
                    <div className="split">
                      <input
                        id="password_field"
                        className="input_field"
                        type="text"
                        name="input-name"
                        title="Expiry Date"
                        placeholder="09/27"
                      />{" "}
                      <input
                        id="password_field"
                        className="input_field"
                        type="number"
                        name="cvv"
                        title="CVV"
                        placeholder="CVV"
                      />
                    </div>
                  </div>
                </div>
                {/* <Link href={`/premium/buy/confirm`}> */}
                <button className="purchase--btn" onClick={confirmPurchase}>
                  Checkout
                </button>
                {/* </Link> */}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetPremium