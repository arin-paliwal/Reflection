/* eslint-disable react/no-unescaped-entities */
import Navbar from "@/components/Navbar";
import Link from "next/link";
import logo from "../../assets/images/logo.png";
import React from "react";
import tnc from "../../assets/images/tnc.gif";
import Image from "next/image";
import Router, { useRouter } from "next/router";
import { useContext } from "react";
import { ReflectionContext } from "@/context/ReflectionContext";
const styles = {
  logoContainer: "flex items-center flex-start",
  navbarTnc:
    "fixed top-0 left-0 right-0 bg-[#A4BC92] ",
  content: "max-w-7xl flex flex-1 justify-between gap-10",
  logo: "cursor-pointer object-contain",
  bannerNav: "flex cursor-pointer items-center space-x-5",
  accentedButton: "bg-black text-white py-2 px-4 rounded-full",
  tandcwrapper: "p-8 flex flex-row",
  rightSide: "mt-[7rem] flex flex-col justify-center fixed",
  tncImage: "h-[600px] w-[600px] mt-[-150px] flex flex-start",
  heading:
    "space-between text-5xl text-[#A4BC92] p-5 flex items-center justify-center",
  tacContent: "max-w-3xl text-xl leading-9 justify-between",
  contenttac: "text-[#787878]",
  headingContent: "text-black font-bold",
  rightContainer: "flex flex-col",
  individual: "bg-[#f2f2f2] p-8 rounded-[50px] gap-[2rem]",
  tncPage: "",
  leftSide: "mt-[7rem]",
  actionButton: "flex flex-col p-5 items-center justify-center",
  accentedButton2:"bg-black text-white py-4 px-4 rounded-full"
};

const TermsConditions = () => {
 const { handleUserAuthentication,currentUser } = useContext(ReflectionContext);
 const router = useRouter();
 const handleAcceptAndSignIn = () => {
   handleUserAuthentication();
   router.push("/");
   console.log("Working Routing")
 };
  return (
    <>
      <div className={styles.tncPage}>
        <div className={styles.navbarTnc}>
          <Navbar/>
        </div>
        <div className={styles.tandcwrapper}>
          <div className={styles.leftSide}>
            <div className={styles.tacContent}>
              <div className={styles.contenttac}>
                <span className="text-black flex items-center justify-center mb-[1rem]">
                  Terms and Conditions for Reflection Blog Collection Web
                  Application
                </span>
                <span className="text-[#A4BC92] text-2xl font-bold mb-[5rem]">
                  Welcome to Reflection, a blog collection Web Application
                  designed to provide a platform for users to create and share
                  their thoughts, ideas, and experiences.
                </span>
                <br></br>
                <hr className="h-px my-8 bg-gray-700 border-0 dark:bg-gray-700" />
                <span className={styles.allTnc}>
                  These Terms and Conditions govern your access to and use of
                  the Reflection website . By using the Website, you agree to be
                  bound by these Terms and Conditions.{" "}
                  <span className="underline">Please read them carefully.</span>
                  <br />
                  <br />
                  <div className={styles.individual}>
                    <span className={styles.headingContent}>
                      1. Acceptance of Terms :{" "}
                    </span>
                    By accessing or using the Reflection Web Application, you
                    acknowledge that you have read, understood, and agree to be
                    bound by these Terms and Conditions, including any
                    additional guidelines and future modifications. If you do
                    not agree to these terms, you may not use the Web
                    Application.
                  </div>
                  <br />
                  <div className={styles.individual}>
                    <span className={styles.headingContent}>
                      2. User Eligibility :{" "}
                    </span>
                    You must be at least 13 years old to use the Reflection Web
                    Application. If you are under 18 years old, you must have
                    parental consent to use the Web Application. By using the
                    Web Application, you represent and warrant that you meet
                    these eligibility requirements.
                  </div>
                  <br />
                  <div className={styles.individual}>
                    <span className={styles.headingContent}>
                      3. User Accounts
                    </span>
                    <br />
                    <span>
                      <ol>
                        <li>
                          <strong>3.1 Registration:</strong> To access certain
                          features of the Web Application, you may need to
                          create a user account. You agree to provide accurate
                          and up-to-date information during the registration
                          process and to keep your account credentials secure.
                        </li>
                        <li>
                          <strong>3.2 Account Responsibility:</strong> You are
                          solely responsible for all activities that occur under
                          your account. You must immediately notify us of any
                          unauthorized use or breach of security.
                        </li>
                        <li>
                          <strong>3.3 Account Termination:</strong> We reserve
                          the right to terminate or suspend your account, at our
                          discretion and without prior notice, for any violation
                          of these Terms and Conditions or for any other reason.
                        </li>
                      </ol>
                    </span>
                    <br />
                  </div>
                  <br />
                  <div className={styles.individual}>
                    <span className={styles.headingContent}>
                      4. User Content
                    </span>{" "}
                    <br />
                    <span>
                      <ol>
                        <li>
                          <strong>4.1 Ownership:</strong> By posting or
                          submitting content on the Reflection Web Application
                          (including blogs, comments, images, and any other
                          materials), you retain ownership of your content.
                          However, you grant us a non-exclusive, worldwide,
                          royalty-free license to use, reproduce, distribute,
                          modify, and publicly display your content within the
                          Web Application.
                        </li>
                        <li>
                          <strong>4.2 Responsibility:</strong> You are solely
                          responsible for the content you post on the Web
                          Application. You agree that your content will not
                          violate any applicable laws or infringe upon the
                          rights of others, including copyright, trademark,
                          privacy, or publicity rights.
                        </li>
                        <li>
                          <strong>4.3 Moderation:</strong> We reserve the right
                          to moderate, edit, or remove any user content that
                          violates these Terms and Conditions or for any other
                          reason, without prior notice.
                        </li>
                      </ol>
                    </span>
                  </div>
                  <br />
                  <div className={styles.individual}>
                    <span className={styles.headingContent}>
                      5. Intellectual Property
                    </span>
                    <br />{" "}
                    <span>
                      <ol>
                        <li>
                          <strong>5.1 Web Application Ownership:</strong> The
                          Reflection Web Application, including its design,
                          features, and content, is owned by us or our licensors
                          and is protected by copyright, trademark, and other
                          intellectual property laws.
                        </li>
                        <li>
                          <strong>5.2 User License:</strong> We grant you a
                          limited, non-transferable, non-exclusive license to
                          use the Web Application for personal, non-commercial
                          purposes. You may not copy, modify, distribute, or
                          create derivative works of the Web Application without
                          our prior written consent.
                        </li>
                      </ol>
                    </span>
                  </div>
                  <br />
                  <div className={styles.individual}>
                    <span className={styles.headingContent}>
                      6. Prohibited Conduct :&nbsp;
                    </span>
                    When using the Reflection Web Application, you agree not to:
                    <br />
                    <span>
                      <ol>
                        <li>
                          <strong>
                            6.1 Violate any applicable laws or regulations:
                          </strong>{" "}
                          You must not violate any applicable laws or
                          regulations while using the Application.
                        </li>
                        <li>
                          <strong>
                            6.2 Engage in any unauthorized access to the Web
                            Application or its systems:
                          </strong>{" "}
                          You must not engage in any unauthorized access to the
                          Web Application or its systems.
                        </li>
                        <li>
                          <strong>
                            6.3 Use the Web Application to transmit any harmful
                            or malicious code or interfere with its proper
                            functioning:
                          </strong>{" "}
                          You must not use the Web Application to transmit any
                          harmful or malicious code or interfere with its proper
                          functioning.
                        </li>
                        <li>
                          <strong>
                            6.4 Harass, threaten, or intimidate other users or
                            engage in any form of hate speech or discriminatory
                            behavior:
                          </strong>{" "}
                          You must not harass, threaten, or intimidate other
                          users or engage in any form of hate speech or
                          discriminatory behavior.
                        </li>
                        <li>
                          <strong>
                            6.5 Impersonate any person or entity or falsely
                            represent your affiliation with any person or
                            entity:
                          </strong>{" "}
                          You must not impersonate any person or entity or
                          falsely represent your affiliation with any person or
                          entity.
                        </li>
                      </ol>
                    </span>
                  </div>
                  <br />
                  <div className={styles.individual}>
                    <span className={styles.headingContent}>
                      7. Disclaimer of Warranties :{" "}
                    </span>
                    The Reflection Web Application is provided on an "as is" and
                    "as available" basis. We make no warranties or
                    representations, express or implied, regarding the Web
                    Application's operation, availability, accuracy, or
                    reliability. We disclaim all warranties, including any
                    implied warranties of merchantability, fitness for a
                    particular purpose, or non-infringement.
                  </div>
                  <br />
                </span>
              </div>
            </div>
          </div>
          <div className={styles.rightContainer}>
            <div className={styles.rightSide}>
              <div className={styles.heading}>
                <h1>
                  Terms & <br></br>
                  Conditions
                </h1>
              </div>
              <Image className={styles.tncImage} src={tnc} alt="tncLogo" />
            </div>
          </div>
        </div>
      </div>
      {currentUser?(<></>):(<div className={styles.actionButton}>
        <Link href={`/t&c/terms`}>
          <div
            className={styles.accentedButton2}
            onClick={handleAcceptAndSignIn}
          >
            Accept T&C and Sign In
          </div>
        </Link>
      </div>)}
    </>
  );
};

export default TermsConditions;
