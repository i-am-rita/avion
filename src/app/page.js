import Homepage from "@/component/Homepage";
import styles from "./page.module.css";
import Navbar from "@/component/Navbar";
import { Collection } from "@/component/Collection";
import { About } from "@/component/About";
import { Footer } from "@/component/Footer";

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <Homepage />
      <div style={{margin: "auto", width: "88%"}}>
      <About/>
      <Collection/>
      </div>
      <Footer/>
 
    </main>
  );
}
