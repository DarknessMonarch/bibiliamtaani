"use client";
import Image from "next/image";
import styles from "@/app/style/about.module.css";
import AboutImage from "@/public/assets/about.png";
import AboutInfoPage from "@/app/page/aboutinfo/page";
import { CheckBadgeIcon as ApprovedIcon } from "@heroicons/react/24/outline";

const aboutInfo = [
  {
    id: 1,
    icon: ApprovedIcon,
    title: "Accessible",
    about:
      "Accessible from any devices smart phone and non smart phone included",
  },
  {
    id: 2,
    icon: ApprovedIcon,
    title: "Free",
    about:
      "It is free to subscribe and play ensuring anyone can learn the word of God without any cost",
  },
  {
    id: 3,
    icon: ApprovedIcon,
    title: "Recurrent",
    about: "Ensures a daily quizzes which keep you learning everyday",
  },
];

export default function AboutPage() {
  return (
    <>
      <div className={styles.aboutContainer}>
        <div className={styles.aboutWrapper}>
          <Image
            className={styles.aboutImg}
            src={AboutImage}
            height={500}
            alt="About Image"
            priority
          />
        </div>
        <div className={styles.aboutInfo}>
          <div className={styles.aboutInfoTop}>
            <h4>About us?</h4>
            <h1>
              Bibilia Mtaani is a game that teaches you the word of God through
              quizzes and you compete for the top spot
            </h1>
          </div>

          <div className={styles.aboutInfoContainer}>
            {aboutInfo.map((info, index) => (
              <div className={styles.infoAboutContainer} key={index}>
                <div className={styles.infoAboutIcon}>
                  <info.icon
                    className={styles.aboutIcon}
                    width={40}
                    height={40}
                  />
                </div>
                <div className={styles.infoAboutWrapper}>
                  <h1>{info.title}</h1>
                  <p>{info.about}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <AboutInfoPage />
    </>
  );
}
