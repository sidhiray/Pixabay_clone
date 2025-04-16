import React, { useEffect, useState } from 'react'
import PixabayContext from './PixabayContext'

const api_key = "49730587-a4d3eb8970635570ef5a6bf49";

const PixabayState = (props) => {

    const [inputData, setInputData] = useState([]);
    const [inputSearch, setInputSearch] = useState('london')

    useEffect(() => {
      const FetchDataFromApi = async() => {
          const api = await fetch(`https://pixabay.com/api/?key=${api_key}&q=${inputSearch}&image_type=photo&per_page=10`);
          const data = await api.json();
          console.log(data.hits)
          setInputData(data.hits)
      };
      FetchDataFromApi();
    }, [inputSearch])

    const FetchDataByCategory = async(cat) => {
        const api = await fetch(`https://pixabay.com/api/?key=${api_key}&category=${cat}&image_type=photo&per_page=10`);
        const data = await api.json();
        console.log(data.hits)
        setInputData(data.hits)
    }
    

  return (
    <PixabayContext.Provider value={{inputData,FetchDataByCategory,setInputSearch}}>{props.children}</PixabayContext.Provider>
  )
}

export default PixabayState