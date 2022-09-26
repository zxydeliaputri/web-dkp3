import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { supabase } from '../../utils/supabaseClient'

function Kategori() {
  const router = useRouter()
  const { id } = router.query
  const [items, setItems] = useState([])
  const [kategori, setKategori] = useState('')

  useEffect(() => {
    getItem()
    getKategori()
  }, [id])

  const getItem = async () => {
    const { data, error } = await supabase
      .from('Produk')
      .select(`id, nama, foto, id_Kategori(nama)`)
      .match({ id_Kategori: id })
    if (data) {
      setItems(data)
    }
  }

  const getKategori = async () => {
    const { data, error } = await supabase
      .from('Kategori')
      .select('id, nama')
      .eq('id', id)
    if (data) setKategori(data[0])
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h1 className='mt-3 mb-3'>{kategori.nama}</h1>
          <div className="row">
            {items.map((item, i) => {
              return (
                <div key={i} className="col-md-3">
                  <div className="card mt-3 mb-3">
                    <div className="card-header p-0">

                      <Image src={item.foto} width={100} height={100} layout="responsive" alt="foto" priority />

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
  )
}

export default Kategori