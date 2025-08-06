import PortfolioHeader from "../components/PortfolioHeader"; // new top bar
import ProfileImage from "../components/ProfileImage";
import About from "../components/About";
import Tools from "../components/Tools";
import Contact from "../components/Contact";
import MusicPlayer from "../components/MusicPlayer";
import BottomNav from "../components/BottomNav";
import Education from "../components/Education";

import styles from "../styles/Home.module.css";
import "../styles/globals.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <PortfolioHeader />

      <div className={styles.gridLayout}>
        <div className={styles.leftCol}>
          <ProfileImage />
        </div>

        <div className={styles.middleCol}>
          <About />
          <Education />
        </div>

        <div className={styles.rightCol}>
          <Tools />
          <Contact />
          <MusicPlayer />
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
