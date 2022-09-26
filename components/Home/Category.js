import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Category() {
  return (
    <React.Fragment>
      <div className='container'>
        <div className='row mt-3'>
          <div className='col-md-4'>
            <div className='text-center'>
              <Link href="/kategori/2">
                <Image src="/sayuran.jpg" alt="sayuran" width="90%" height="80%" priority />
              </Link>
              <div>Sayuran</div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='text-center'>
              <Link href="/kategori/3">
                <Image src="/buah.jpg" alt="sayuran" width="90%" height="80%" priority />
              </Link>
              <div>Buah</div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='text-center'>
              <Link href="/kategori/1">
                <Image src="/rempah.jpg" alt="sayuran" width="90%" height="80%" priority />
              </Link>
              <div>Rempah</div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Category