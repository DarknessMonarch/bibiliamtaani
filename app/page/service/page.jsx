"use client";

import Image from "next/image";
import styles from "@/app/style/service.module.css";
import phoneImage1 from "@/public/assets/heroImage.png";
import phoneImage2 from "@/public/assets/about.png";
import phoneImage3 from "@/public/assets/aboutInfo.png";
import phoneImage4 from "@/public/assets/phone2.png";
import phoneImage5 from "@/public/assets/phone3.png";
import phoneImage6 from "@/public/assets/phone4.png";
import phoneImage7 from "@/public/assets/phone5.png";
import BackgroundDarkImage from "@/public/assets/backgroundDark.png";

export default function AboutInfoPage() {
  const ImageData = [
    {
      id: 1,
      image: phoneImage1,
    },
    {
      id: 2,
      image: phoneImage2,
    },
    {
      id: 3,
      image: phoneImage3,
    },
    {
      id: 4,
      image: phoneImage4,
    },
    {
      id: 5,
      image: phoneImage5,
    },
    {
      id: 6,
      image: phoneImage6,
    },
    {
      id: 7,
      image: phoneImage7,
    },
  ];

  return (
    <div className={styles.serviceContainer}>
          <Image
          className={styles.serviceBackground}
          src={BackgroundDarkImage}
          alt="Background image"
          layout="fill"
          quality={100}
          objectPosition="center"
          objectFit="cover"
          priority={true}
        />
      <div className={styles.serviceTop}>
        <h4>Services</h4>
        <h1>We making learning of the word easier and fun through gaming</h1>
        <p>
          Through the following the screens you see how easy it is to get
          started
        </p>
      </div>
      <div className={styles.serviceContainerBeam}>
      <div className={styles.serviceImageContainer}>
        {ImageData.map((image, index) => (
          <div className={styles.serviceImageCard} key={index}>
            <Image
              className={styles.serviceImage}
              src={image.image}
              alt="service image"
              height={400}
              priority={true}
            />
          </div>
        ))}
      </div>
      </div>

    </div>
  );
}
