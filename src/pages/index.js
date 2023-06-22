import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useState } from "react";
import Main from "@/components/Main";
import Sobre from "@/components/Sobre";
import Recursos from "@/components/Recursos";
import InputSelection from "@/components/Input";

export default function Home() {
  const [text, setText] = useState("");
  return (
    <>
  
      <main className={`${styles.main}`}>
        <Main></Main>
        <InputSelection></InputSelection>
        <Sobre></Sobre>
        <Recursos></Recursos>
        
      </main>
    </>
  );
}
