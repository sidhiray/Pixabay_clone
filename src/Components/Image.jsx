import React, { useContext } from 'react'
import PixabayContext from '../context/PixabayContext'

const Image = () => {

    // console.log(useContext(PixabayContext));

    const {inputData} = useContext(PixabayContext);

  return (
    <div className='container'>
    <div className='flex my-4'>{inputData.map((data)=><div key={data.id}>
        <div className='item'>
            <img src={data.largeImageURL} alt='' />
        </div>
    </div>)}</div>
    </div>
  )
}

export default Image