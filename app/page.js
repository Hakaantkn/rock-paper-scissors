import Image from "next/image";
import styles from "./page.module.css";
import { Header } from "./components/Header";
import { Game } from "./components/game";





export default function Home() {
  return (
    <div style={{marginInline: "auto" , width: "100vh"}}>
      <Header/>
      <Game/>

    </div>
  );
}
