import Image from 'next/image'
import React from 'react'

function Category() {
  return (
    <React.Fragment>
      <div className='container'>
        <div className='row mt-3'>
          <div className='col-md-4'>
            <div className='text-center'>
              <Image src="/sayuran.jpg" alt="sayuran" width="90%" height="80%" />
              <div>Sayuran</div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='text-center'>
              <Image src="/buah.jpg" alt="sayuran" width="90%" height="80%" />
              <div>Buah</div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='text-center'>
              <Image src="/rempah.jpg" alt="sayuran" width="90%" height="80%" />
              <div>Rempah</div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Category