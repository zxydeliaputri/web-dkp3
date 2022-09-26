import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { supabase } from "../../utils/supabaseClient";
import Image from "next/image";

function DetilProduk() {
  const router = useRouter()
  const { id } = router.query
  const [item, setItem] = useState()

  useEffect(() => {
    ambilData()
  }, [id])

  const ambilData = async () => {
    const { data, error } = await supabase
      .from("Produk")
      .select()
      .eq('id', id)

    if (data) setItem(data[0])
  }

  return (
    <div className="container">
      <div className="row mt-3 mb-3">
        <div className="col-md-3">
          {item ? (
            <Image src={item.foto} width={100} height={100} layout="responsive" alt="foto" priority />
          ) : 'sedang memuat...'}
        </div>
        <div className="col">
          <h1>{item ? item.nama : 'sedang memuat...'}</h1>
          {item ? item.deskripsi : 'sedang memuat...'}
        </div>
      </div>
    </div>
  );
}

export default DetilProduk;
