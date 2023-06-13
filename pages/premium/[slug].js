/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Link from 'next/link';
import Router, { useRouter } from 'next/router';
const styles = {
  wrapper: "h-[650px] w-[1350px] p-10 bg-[#E3F4F4] rounded-[50px]",
  heading: "flex items-center justify-between text-3xl text-[#2a9d8f]",
  page:"flex items-center justify-center h-screen bg-[#C4DFDF]",
  paymentCard:"mt-7 flex items-center justify-center",
  };
  
const GetPremium = () => {
  const router=useRouter();
  const confirmPurchase=()=>{
    router.push(`/confirmPurchase`);
  }
  return (
    <div className={styles.page}>
      <div className={styles.wrapper}>
        <div className={styles.heading}>
          <h1>
            Immerse Yourself in a Vast and Exclusive Collection of Enlightening
            Blogs: Unlock{" "}
            <span className="text-black font-medium">Premium Subscription</span>{" "}
            to Access a Wealth of Knowledge and Unleash Your Curiosity
          </h1>
        </div>
        <div className={styles.paymentCard}>
          <div className="modal">
            <form className="form">
              <div className="payment--options">
                <button name="paypal" type="button"></button>{" "}
                <button name="apple-pay" type="button"></button>{" "}
                <button name="google-pay" type="button"></button>
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
                    placeholder="Enter your full name"
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
                    placeholder="0000 0000 0000 0000"
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
                      placeholder="01/23"
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
                <button className="purchase--btn"
                onClick={confirmPurchase}>Checkout</button>
              {/* </Link> */}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetPremium