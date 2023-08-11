import Image from "next/image";
import styles from "./page.module.css";
import { ThemeChanger } from "./components/change-theme";

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <h1 className={styles.title}>Hello!</h1>
        <ThemeChanger />
      </div>
    </main>
  );
}
