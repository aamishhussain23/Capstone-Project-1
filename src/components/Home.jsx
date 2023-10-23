import React from 'react'
import homeCss from '../styles/home.module.css'
import Profileweather from './Profileweather'
import News from './News'
import Temp from './Temp'
import Notes from './Notes'
import Timer from './Timer'

function Home() {

  return (
    <>
        <div className={homeCss.child_1}>
          <div className={homeCss.row_2}>
            <Profileweather></Profileweather>
          </div>

          <div className={homeCss.row_3}>
            <Notes></Notes>
          </div>

          <div className={homeCss.rest_row}>
            <News></News>
          </div>

          <div className={homeCss.temp1}>
            <Temp></Temp>
          </div>

          <div className={homeCss.col_2}>
            <Timer></Timer>
          </div>
        </div> 
        
    </>
  )
}

export default Home
