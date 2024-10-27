"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import AboutPage from "@/app/page/about/page";
import Contact from "@/app/page/contact/page";
import styles from "@/app/style/home.module.css";
import ServicePage from "@/app/page/service/page";
import HeroImg from "@/public/assets/heroImage.png";
import BackgroundDarkImage from "@/public/assets/backgroundDark.png";
import { ArrowTopRightOnSquareIcon as LinkIcon } from "@heroicons/react/24/outline";

export default function HomePage() {
  const router = useRouter();

  const openAbout = () => {
    router.push("/page/about", { scroll: false });
  };
  return (
    <div className={styles.homeWrapper}>
      <div className={styles.homeContainer}>
        <Image
          className={styles.homeBackground}
          src={BackgroundDarkImage}
          alt="Background image"
          layout="fill"
          quality={100}
          objectPosition="center"
          objectFit="cover"
          priority={true}
        />
        <div className={styles.heroContainWrapper}>
          <div className={styles.heroContain}>
            <div className={styles.heroImageContainer}>
              <Image
                className={styles.heroImg}
                src={HeroImg}
                alt="Hero image"
                height={500}
                priority={true}
              />
            </div>
            <div className={styles.heroBoxContent}>
              <div className={styles.rowtopContent}>
                <div className={styles.boxContent}></div>
                <div className={styles.boxContent}>
                  <h1>The word of God accessible on all devices</h1>
                </div>
              </div>
              <div className={styles.rowbottomContent}>
                <div className={styles.boxContent}>
                  <h1> The word is just a few digit away</h1>
                </div>

                <div className={styles.boxContent} onClick={() => openAbout()}>
                  <div className={styles.boxDivider}>
                    <LinkIcon
                      className={styles.boxlinkIcon}
                      alt="Menu icon"
                      width={40}
                    />
                  </div>
                  <h1>LEARN MORE HERE</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <AboutPage />
      </div>
      <div>
        <ServicePage />
      </div>
      <div>
        <Contact />
      </div>
    </div>
  );
}
