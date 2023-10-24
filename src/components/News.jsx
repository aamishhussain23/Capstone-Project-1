import React from 'react'
import newsCss from '../styles/news.module.css'
import image from '../assets/Thriller.png'

function News({title, description, img}) {
  return (
    <>
      <div className={newsCss.img_time}>

        <img src={img} alt="" />

        <div className={newsCss.strip}>
          <h2>{title}</h2>
          <p className={newsCss.time}>
            2-20-2023 | 07:35 PM
          </p>
        </div>
      </div>
      
      <div className={newsCss.text}>
        {description} 
      </div>
    </>
  )
}

export default News
