import react from "react";
import Link from "next/link";
import Image from "next/image";
import facebook from "../assets/Social/facebook.svg";
import instagram from "../assets/Social/instagram.svg";
import whatsapp from "../assets/Social/whatsapp.svg";
import github from "../assets/Social/github.svg";
import about from "../assets/images/about.gif"
const styles = {
  page: "p-8",
  headingContainer: "w-full",
  heading: "text-6xl text-[#a4bc92] flex items-center justify-center w-full",
  leftSide: "max-w-2xl flex flex-col p-5 items-center justify-center gap-8",
  introHeading: "text-[#787878] flex max-w-2xl text-xl",
  introBody:
    "flex text-xl text-[#787878] bg-[#f2f2f2] p-4 rounded-full items-center justify-center",
  rightSide: "",
  wrapper: "flex flex-row flex-1",
  socialContainer: "flex flex-col gap-5 items-center justify-center",
  socialHeading: "text-2xl text-bold text-[#a4bc92]",
  socialIcons:"flex flex-row space-between gap-5"
};
const About=()=>{
    return (
      <div className={styles.page}>
        <div className={styles.headingContainer}>
          <div className={styles.heading}>
            <h1>About Us !</h1>
          </div>
        </div>
        <div className={styles.wrapper}>
          <div className={styles.leftSide}>
            <div className={styles.introHeading}>
              Welcome here, a captivating part of my web application where you
              can discover the essence of who I am. Unveil the layers of my
              personality, explore my achievements, and delve into my passions,
              all in one immersive digital experience.
            </div>
            <hr class="w-80 h-1 mx-auto my-4 bg-gray-300 border-0 rounded md:my-10 dark:bg-gray-700" />
            <div className={styles.introBody}>
              <h1>
                {" "}
                You can visit my portfolio website which showcases my skills,
                achievements & educations -{" "}
                <span className="cursor-pointer">www.bit.ly/ArinPaliwal</span>
              </h1>
            </div>
            <div className={styles.socialContainer}>
              <h1 className={styles.socialHeading}>Connect with us : </h1>
              <div className={styles.socialIcons}>
                <Image src={whatsapp} alt="whatsapp" width={40} />
                <Image src={facebook} alt="facebook"  width={40}/>
                <Image src={instagram} alt="instagram"  width={40}/>
                <Image src={github} alt="github" width={40} />
              </div>
            </div>
          </div>
          <div className={styles.rightSide}>
            <div className={styles.animatedGIF}>
              <Image src={about} alt="about-gif" width={600} />
            </div>
          </div>
        </div>
      </div>
    );
}
export default About;