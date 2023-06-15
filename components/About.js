import react from "react";
import Link from "next/link";
const styles={
    page:"p-10 flex flex-row",
    wrapper:"flex flex-row p-8",
    heading:"text-5xl text-[#a4bc92] flex items-center justify-center w-full",
    leftSide:"max-w-2xl flex flex-col",
    introHeading:"text-[#787878] flex flex-col max-w-2xl"
}
const About=()=>{
    return (
      <div className={styles.page}>
        <div className={styles.wrapper}>
          <div className={styles.heading}>
            <h1>About Us !</h1>
          </div>
          <div className={styles.leftSide}>
            <div className={styles.introHeading}>
              Welcome here, a captivating part of my web application where you
              can discover the essence of who I am. Unveil the layers of my
              personality, explore my achievements, and delve into my passions,
              all in one immersive digital experience.
            </div>
            <div className={styles.intoBody}>
              You can find my projects,achievements in my{" "}
              <Link href={`www.bit.ly/ArinPaliwal`}>
                <span className="text-red-500">portfolio website</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
}
export default About;