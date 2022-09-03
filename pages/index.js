import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import { supabase } from "../utils/supabaseClient";

export default function Home() {
  const [Produk, setProduk] = useState([]);

  useEffect(() => {
    ambilData();
  }, []);

  const ambilData = async () => {
    const { data, error } = await supabase.from("Produk").select();

    if (data) console.log(data);
    if (error) throw error;
  };

  return (
    <div className={styles.container}>
      <h1>HALAMAN DEPAN</h1>
    </div>
  );
}
