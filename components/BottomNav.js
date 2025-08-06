import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function BottomNav() {
  return (
    <div className={styles.bottomNavWrapper}>
      <div className={styles.bottomNav}>
        <p className={styles.projectLabel}>Projects</p>
        <div className={styles.projectIcons}>
          <Link href="/project1">🪪</Link>
          <Link href="/project2">📊</Link>
          {/* <Link href="/project3">🍽️</Link> */}
          {/* <Link href="/project4">🔮</Link> */}
          <Link href="/project5">🏢</Link>
          <Link href="/project6">📽️</Link>
        </div>
        <p className={styles.copyright}>
          <b>@ 2025 Denisse Benito. All rights reserved.</b>
        </p>
      </div>
    </div>
  );
}
