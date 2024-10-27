import styles from "@/app/style/loading.module.css";
import LogoAnimation from "@/public/assets/logo.gif";
import Image from "next/image";
export default function Loading() {
  return (
    <div className={styles.loadingComponent}>
        <Image
          className={styles.logoHome}
          src={LogoAnimation}
          alt="logo icon"
          height={200}
          priority={true}
        />
    </div>
  );
}
