import React, { useContext } from 'react'
import PixabayContext from '../context/PixabayContext'


const Navbar = () => {

    const { FetchDataByCategory,setInputSearch } = useContext(PixabayContext);

    return (
        <>
            <div className='container text-center my-3'>
                <button onClick={(() => FetchDataByCategory('nature'))} type="button" className="btn btn-outline-primary mx-3"> Nature</button>
                <button onClick={(() => FetchDataByCategory('science'))} type="button" className="btn btn-outline-secondary mx-3">Science</button>
                <button onClick={(() => FetchDataByCategory('education'))} type="button" className="btn btn-outline-success mx-3">Education</button>
                <button onClick={(() => FetchDataByCategory('animals'))} type="button" className="btn btn-outline-danger mx-3">Animals</button>
                <button onClick={(() => FetchDataByCategory('food'))} type="button" className="btn btn-outline-warning mx-3">Food</button>
                <button onClick={(() => FetchDataByCategory('sports'))} type="button" className="btn btn-outline-info mx-3">Sports</button>
                <button onClick={(() => FetchDataByCategory('travel'))} type="button" className="btn btn-outline-light mx-3">Travel</button>
                <button onClick={(() => FetchDataByCategory('music'))} type="button" className="btn btn-outline-info mx-3">Music</button>
            </div>
            <div className='container text-cnter' style={{width:'550px'}}>
                <input onChange={((e)=>setInputSearch(e.target.value))} type="text" className="form-control bg-black text-white" placeholder="Search what you like"/>
            </div>
        </>
    )
}

export default Navbar