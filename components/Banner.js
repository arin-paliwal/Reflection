import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import Typewriter from "typewriter-effect";
import banner from "../assets/images/banner.png";
import bannerRight from "../assets/images/bannerRight.gif";

const styles = {
  wrapper: " overflow-x-hidden gap-10 flex flex-col  h-[87vh] bg-[#A4BC92] p-5",
  welcomeContainer: "flex justify-center items-center w-screen",
  welcome: "text-[4rem]",
  typeWriter: "text-[2.5rem] mt-5",
  secondContainer: "flex flex-row mt-[5rem]",
  whyLeft: "w-1/2",
  whyRight: "max-w-2xl h-[7rem] flex items-center justify-center",
  reason: "text-2xl text-[#36454F]",
  testi: "text-[1rem] h-[7rem] p-6 flex justif-center",
  comma: "mt-[2rem]",
  testimonials: "max-w-4xl",
  why: "text-3xl text-[#fff] mb-[1rem] font-bold",
  whyContainer: "flex items-center justify-center",
};
const testimonials = [
  "This blog website has become my go-to source for thought-provoking articles. The curated content never fails to spark my curiosity and broaden my perspective. Highly recommended! - Sarah M.",
  "I've been searching for a reliable and engaging blog platform, and I'm thrilled to have found this website. The articles are top-notch, covering a wide range of topics that keep me coming back for more. It's a treasure trove of knowledge! - Mark T.",
  "As an avid reader, I appreciate the meticulous curation of this blog website. The quality of the articles is consistently impressive, and the topics covered are diverse and fascinating. It's my virtual escape into a world of captivating ideas. - Emily S.",
  "I can't say enough good things about this blog website. The content is not only informative but also presented in an engaging and captivating manner. It's refreshing to find a platform that prioritizes both quality and user experience. - David L.",
  "I stumbled upon this blog website and instantly fell in love with the insightful and well-researched articles. It's like having a virtual mentor guiding me through various subjects of interest. It's a game-changer for anyone seeking intellectual stimulation and personal growth. - Rachel H.",
];
const Banner = () => {
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  useEffect(() => {
    setTestimonialIndex(Math.floor(Math.random() * testimonials.length));
  }, []);
  return (
    <div className={styles.wrapper}>
      <div className={styles.headingContainer}>
        <div className={styles.welcomeContainer}>
          <h1 className={styles.welcome}>Welcome to Reflection</h1>
        </div>
        <h1 className={styles.typeWriter}>
          <Typewriter
            options={{
              strings: [
                "Discover Articles & Blogs",
                "Curated Blogs for Curious Minds",
                "Foster Thought-Provoking Discussions",
                "Sign Up and Dive into Thoughtful Tales",
              ],
              autoStart: true,
              loop: true,
              deleteSpeed: 0.8,
            }}
          />
        </h1>
      </div>
      <div className={styles.secondContainer}>
        <div className={styles.whyLeft}>
          <div className={styles.whyContainer}>
            <h1 className={styles.why}>Why Reflection ?</h1>
          </div>
          <h1 className={styles.reason}>
            ● Engaging insights that ignite your curiosity.
          </h1>
          <h1 className={styles.reason}>
            ● Relevant and reliable content you can trust.
          </h1>
          <h1 className={styles.reason}>
            ● Diverse perspectives to broaden your horizons.
          </h1>
          <h1 className={styles.reason}>
            ● Thought-provoking articles that inspire personal growth.
          </h1>
          <h1 className={styles.reason}>
            ● Connect with a community of like-minded enthusiasts.
          </h1>
        </div>
        <div className={styles.whyRight}>
          <h1 className={styles.testi}>
            <div className="testimonial">
              <blockquote>{testimonials[testimonialIndex]}</blockquote>
              <div></div>
            </div>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Banner;
