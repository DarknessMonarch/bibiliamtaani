"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Logo from "@/public/assets/logo.png";
import { usePathname } from "next/navigation";
import styles from "@/app/style/navbar.module.css";
import {
  XMarkIcon as CloseIcon,
  Squares2X2Icon as MenuIcon,
} from "@heroicons/react/24/outline";

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const [show, setShow] = useState(false);

  const toggleShow = () => {
    setShow(!show);
  };


  return (
    <div className={styles.navContainer}>
      <div className={styles.rightNav}>
      <Image
        className={styles.logo}
        src={Logo}
        alt="logo icon"
        height={50}
        priority
      />
      <div className={styles.innerNav}>
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
          href="/page/service"
          className={`${styles.LinkContainer} ${
            pathname === "/page/service" ? styles.activeLink : ""
          }`}
        >
          Service
        </Link>
      </div>
      </div>
    
      <div className={styles.leftNav}>
        <Link
          href="/page/contact"
          className={`${styles.LinkContainer} ${
            pathname === "/page/contact" ? styles.activeLink : ""
          }`}
        >
          Contact
        </Link>
        <div className={styles.menuCircle}>
          <MenuIcon
            onClick={() => toggleShow()}
            className={styles.menuIcon}
            alt="Menu icon"
            width={30}
          />
        </div>
      </div>

      {/* side nav  */}
      <div
        className={`${styles.sideNav} ${show === true ? styles.sideSlide : ""}`}
      >
        <div className={styles.topsideNav}>
          <CloseIcon
            onClick={() => toggleShow()}
            className={styles.exitIcon}
            alt="Exit icon"
            width={30}
            height={30}
          />
        </div>
        <div className={styles.profileContainer}>
          <Image
            className={styles.mobileLogo}
            src={Logo}
            alt="logo icon"
            height={100}
            priority
          />
        </div>
        <div className={styles.sideMidNav}>
          <Link
            href="/page/home"
            className={`${styles.sideLinkContainer} ${
              pathname === "/page/home" ? styles.activeLink : ""
            }`}
          >
            Home
          </Link>
          <Link
            href="/page/about"
            className={`${styles.sideLinkContainer} ${
              pathname === "/page/about" ? styles.activeLink : ""
            }`}
          >
            About
          </Link>
          <Link
            href="/page/service"
            className={`${styles.sideLinkContainer} ${
              pathname === "/page/service" ? styles.activeLink : ""
            }`}
          >
            Service
          </Link>
          <Link
            href="/page/contact"
            className={`${styles.sideLinkContainer} ${
              pathname === "/page/contact" ? styles.activeLink : ""
            }`}
          >
            Contact
          </Link>
          <Link
            href="/page/policy"
            className={`${styles.sideLinkContainer} ${
              pathname === "/page/policy" ? styles.activeLink : ""
            }`}
          >
            Privacy Policy
          </Link>
          <Link
            href="/page/terms"
            className={`${styles.sideLinkContainer} ${
              pathname === "/page/terms" ? styles.activeLink : ""
            }`}
          >
            Terms and Condition
          </Link>
        </div>
      </div>
      {/* side nav  */}
    </div>
  );
}
