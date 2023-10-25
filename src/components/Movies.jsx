import React, { useEffect, useState } from 'react'
import moviesCss from '../styles/movies.module.css'
import logo from '../assets/logo.png'
import img from '../assets/Action.png'
import { useNavigate } from 'react-router-dom'

function Movies() {
    let Navigate = useNavigate()
    let [category, setCategory] = useState([])

    useEffect( () => {
        setCategory(JSON.parse(localStorage.getItem('categories')))
        console.log(category)
    }, [])

  return (
    <div className={moviesCss.container}>
      <nav>
        <p>Super app</p>
        <img onClick={() => Navigate('/')} src={logo} alt="" />
      </nav>
      <section className={moviesCss.movies_section}>
        <p>Entertainment according to your choice</p>
        <br />

        {
            category.map( (movieType) =>  
                <div className={moviesCss.collection}>
                    <span>{movieType}</span>
                    <br />
                    <br />
                    <div className={moviesCss.images}>
                        <img src={img} alt="" />
                        <img src={img} alt="" />
                        <img src={img} alt="" />
                        <img src={img} alt="" />
                    </div>
                    <br />
                </div>
            )
        }
        
        
      </section>
    </div>
  )
}

export default Movies
