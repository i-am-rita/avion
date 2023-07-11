import Homepage from "../component/Homepage";
import styles from "./page.module.css";
import { Collection } from "../component/Collection";
import { About } from "../component/About";
import { Join } from "../component/Join";
import { Collectiongallery } from "../component/Collectiongallery";

export default function Home() {
  return (
    <main className={styles.main}>
      <Homepage />
      <div style={{ margin: "auto", width: "88%" }}>
        <About />
        <Collection />
        <Join />
      </div>
    </main>
  );
}
