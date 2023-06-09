import React from "react";
import Image from "next/image";
import bookmark from "../../assets/Social/bookmark.svg";
import avatar from "../../assets/images/avatar.png";
import menu from "../../assets/Social/menu.svg";
import play from "../../assets/images/play.gif";
import facebook from "../../assets/Social/facebook.svg";
import twitter from "../../assets/Social/twitter.svg";
import whatsapp from "../../assets/Social/whatsapp.svg";
import banner from "../../assets/images/banner.jpg";
const styles = {
  wrapper: `flex items-center justify-center flex-[3]`,
  content: `h-screen w-full p-[2rem]`,
  postHeaderContainer: `flex justify-between items-center mt-[2.2rem] mb-[1.2rem]`,
  authorContainer: `flex gap-[1rem]`,
  authorProfileContainer: `rounded-full h-[3rem] grid center w-[3rem] overflow-hidden`,
  authorImage: `object-cover`,
  column: `flex flex-1 flex-col justify-center`,
  postDetails: `flex gap-[.2rem] text-[#787878]`,
  listenButton: `flex items-center gap-[.2rem] text-[#A4BC92]`,
  social: `flex gap-[1rem] text-[#787878] cursor-pointer`,
  space: `font-bold`,
  bannerContainer: `h-[18rem] w-full grid center overflow-hidden mb-[2rem]`,
  articleContainer: `flex flex-col gap-[1rem]`,
  image: "object-cover",
  title: "font-bold text-3xl",
  subTitle: "text-[1.2rem] text-[#787878]",
  article: "font-medium",
};
const ArticleMain = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.postHeaderContainer}>
          <div className={styles.authorContainer}>
            <div className={styles.authorProfileContainer}>
              <Image
                className={styles.authorImage}
                src={avatar}
                alt="profile-image"
                width={100}
                height={100}
              />
            </div>
            <div className={styles.column}>
              <div className="font-bold">Arin Paliwal</div>
              <div className={styles.postDetails}>
                <span>Technology ● 19:45</span>
                <span className={styles.listenButton}>
                  <Image src={play} alt="play" width={20} height={20} />
                  Hear the article
                </span>
              </div>
            </div>
          </div>
          <div className={styles.social}>
            <Image src={twitter} alt="twitter" />
            <Image src={facebook} alt="facebook" />
            <Image src={whatsapp} alt="whatsapp" />
            <div className={styles.space}>|</div>
            <Image src={bookmark} alt="bookmark" />
            <Image src={menu} alt="menu" />
          </div>
        </div>
        <div className={styles.articleContainer}>
          <div className={styles.bannerContainer}>
            <Image src={banner} alt="banner-image" className={styles.image} />
          </div>
          <div className={styles.title}>
            The technologies that will lead you to a good package.
          </div>
          <h4 className={styles.subTitle}>
            <div>Arin Paliwal ● September 20, 2003 ● 698↑ 14↓</div>
          </h4>
          <div className={styles.article}>
            In today&apos;s fast-paced and highly interconnected world, several
            technologies play a crucial role in ensuring a good package for
            various products and services. These advancements not only enhance
            the efficiency and reliability of packaging processes but also
            contribute to the overall customer experience. Here are ten key
            technologies that are instrumental in delivering a good package:{" "}
            <br></br>1. Automated Packaging Systems: Utilizing robotics and
            advanced machinery, automated packaging systems streamline the
            packaging process, reducing errors and increasing productivity.{" "}
            <br></br>2. Intelligent Labeling Solutions: Barcode scanners, RFID
            tags, and smart labels enable accurate tracking and inventory
            management, ensuring the right package reaches the right
            destination. <br></br>3. Sustainable Materials:
            Environmentally-friendly packaging materials, such as biodegradable
            plastics, compostable materials, and recycled packaging, minimize
            the ecological footprint and cater to the growing demand for
            sustainable practices. <br></br>4. Anti-Tampering Technologies:
            Tamper-evident seals, holographic labels, and anti-counterfeiting
            measures ensure product integrity and build trust by safeguarding
            packages from unauthorized access or tampering. <br></br>5.
            IoT-enabled Packaging: Internet of Things (IoT) devices embedded in
            packages provide real-time data on product conditions like
            temperature, humidity, and location, ensuring optimal quality and
            safety during transportation. <br></br>6. Augmented Reality (AR):
            AR-based packaging solutions enhance customer engagement by enabling
            interactive experiences through mobile apps, allowing users to
            visualize products in a virtual environment. <br></br>7. Intelligent
            Packaging Design: Utilizing CAD software, designers can create
            packaging structures that optimize protection, minimize material
            waste, and maximize product presentation, resulting in visually
            appealing and functional packages. <br></br>8. Track-and-Trace
            Systems: Advanced track-and-trace technologies, including GPS,
            geofencing, and cloud-based platforms, enable precise monitoring of
            packages throughout the supply chain, ensuring transparency and
            minimizing losses. <br></br>9. Automated Quality Control: Computer
            vision systems and machine learning algorithms inspect packages for
            defects, ensuring consistent quality and reducing the likelihood of
            faulty products reaching consumers. <br></br>10. Personalized
            Packaging: Digital printing technologies allow for on-demand and
            customizable packaging, enabling brands to create unique and
            personalized experiences for their customers, fostering brand
            loyalty. By harnessing the power of these technologies, businesses
            can achieve efficient, secure, sustainable, and customer-centric
            packaging solutions that contribute to a positive overall package
            experience.
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleMain;
