"use client";

import Link from "next/link";
import Image from "next/image";
import Message from "@/app/page/message/page";
import { usePathname } from "next/navigation";
import Logo from "@/public/assets/logoWhite.png";
import styles from "@/app/style/contact.module.css";
import BackgroundDarkImage from "@/public/assets/backgroundDark.png";

import {
  PhoneIcon,
  MapPinIcon as LocationIcon,
  EnvelopeIcon as MailIcon,
} from "@heroicons/react/24/outline";

export default function ContactPage() {
  const pathname = usePathname();

  return (
    <>
    <Message/>
    <div className={styles.contactContainer}>
      <div className={styles.contactWrapper}>
        <div className={styles.contactPart}>
          <Image
            onClick={() => goHomw()}
            className={styles.logo}
            src={Logo}
            alt="Logo Image"
            width={100}
            priority
          />
          <p>Injili kila mahali</p>
          <h1>Bibili Mtaani</h1>
        </div>
        <div className={styles.contactPart}>
          <h1>Links</h1>
          <Link
            href="/page/home"
            className={`${styles.LinkContainer} ${
              pathname === "/page/home" ? styles.activeLink : ""
            }`}
          >
            Home
          </Link>
          <Link
            href="/page/about"
            className={`${styles.LinkContainer} ${
              pathname === "/page/about" ? styles.activeLink : ""
            }`}
          >
            About
          </Link>
          <Link
            href="/page/contact"
            className={`${styles.LinkContainer} ${
              pathname === "/page/contact" ? styles.activeLink : ""
            }`}
          >
            Contact
          </Link>

          <Link
            href="/page/policy"
            className={`${styles.LinkContainer} ${
              pathname === "/page/policy" ? styles.activeLink : ""
            }`}
          >
            Privacy Policy
          </Link>
          <Link
            href="/page/terms"
            className={`${styles.LinkContainer} ${
              pathname === "/page/terms" ? styles.activeLink : ""
            }`}
          >
            Terms and Condition
          </Link>
        </div>
        <div className={styles.contactPart}>
          <h1>contact</h1>
          <div className={styles.contactInfoWrapper}>
            <div className={styles.contactInfo}>
              <LocationIcon
                className={styles.arrowIcon}
                alt="location icon"
                width={24}
                height={24}
              />
              <h4>Kenya, Nairobi</h4>
            </div>
            <div className={styles.contactInfo}>
              <PhoneIcon
                className={styles.arrowIcon}
                alt="phone icon"
                width={24}
                height={24}
              />
              <h4>07********</h4>
            </div>
            <div className={styles.contactInfo}>
              <MailIcon
                className={styles.arrowIcon}
                alt="email icon"
                width={24}
                height={24}
              />
              <h4>contact@bibiliamtaani.com</h4>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footerContainer}>
        <h4>Bibilia Mtaani all right reserved.</h4>
      </div>
    </div>
    </>
   
  );
}
