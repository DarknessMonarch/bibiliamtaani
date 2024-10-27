"use client";
import Image from "next/image";
import styles from "@/app/style/aboutinfopage.module.css";
import AboutImage from "@/public/assets/aboutinfo.png";

const aboutInfoData = [
  {
    id: 1,
    title: 100,
    aboutInfo: "Phone support",
  },
  {
    id: 2,
    title: 100,
    aboutInfo: "Accessible",
  },
];

export default function AboutInfoPage() {
  return (
    <div className={styles.aboutInfoContainer}>
      <div className={styles.aboutInfoWrapper}>
        <div className={styles.aboutInfoWrapperTop}>
          <h1>Learning the word made easier</h1>
          <p>
            Just by pressing *384*54489# you can easily start playing the
            quizzes learning more about the word of God
          </p>
          <div className={styles.aboutInfoWrapperContainer}>
            {aboutInfoData.map((info, index) => (
              <div className={styles.infoaboutInfoWrapper} key={index}>
                <h2>{info.title}%</h2>
                <p>{info.aboutInfo}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.aboutInfoWrapper}>
        <Image
          className={styles.aboutInfoImg}
          src={AboutImage}
          alt="aboutInfo Image"
          priority
        />
      </div>
    </div>
  );
}
