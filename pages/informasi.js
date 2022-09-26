import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { supabase } from '../utils/supabaseClient'

function Informasi() {
  const [items, setItems] = useState([])

  useEffect(() => {
    getItem()
  }, [])


  const getItem = async () => {
    const { data, error } = await supabase
      .from("Produk")
      .select()
    if (data) {
      setItems(data)
    }
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="row">
            {items.map((item, i) => {
              return (
                <div key={i} className="col-md-3">
                  <div className="card mt-3 mb-3">
                    <div className="card-header p-0">

                      {item ? (
                        <Image src={item.foto} className="img-thumbnail" width={100} height={100} layout="responsive" alt="foto" priority />
                      ) : 'loading...'}

                    </div>
                    <div className="card-body">
                      <Link href={`/produk/${encodeURIComponent(item.id)}`}>
                        <h5>{item.nama}</h5>
                      </Link>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Informasi;
