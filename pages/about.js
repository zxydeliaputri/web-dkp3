import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import { supabase } from "../utils/supabaseClient";

export default function About() {
  const [Produk, setProduk] = useState([]);

  useEffect(() => {
    ambilData();
  }, []);

  const ambilData = async () => {
    const { data, error } = await supabase.from("Kategori").select();

    if (data) setProduk(data);
    if (error) throw error;
  };

  return (
    <div className={styles.container}>
      <h1>HALAMAN DEPAN</h1>

      <ul>
        {Produk.map((item) => {
          return (
            <li key={item.id}>
              {item.nama}
              <div>{item.tanggal}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
