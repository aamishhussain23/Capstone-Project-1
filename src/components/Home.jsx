import React from 'react'
import homeCss from '../styles/home.module.css'
import Profileweather from './Profileweather'
import News from './News'

function Home() {
  let status = false

  return (
    <>

    {
      status ? 
        <div className={homeCss.child_1}>
          <div className={`${homeCss.profile} ${homeCss.row_2}`}>
            <Profileweather status={status}></Profileweather>
          </div>

          <div className={`${homeCss.notes} ${homeCss.row_3}`}>
            notes
          </div>

          <div className={`${homeCss.news} ${homeCss.rest_row}`}>
            news
          </div>

          <div className={`${homeCss.temp} `}>
            temp
          </div>

          <div className={`${homeCss.timer} ${homeCss.col_2} `}>
            timer
          </div>
        </div> 

      :

      <div className={homeCss.child_2}>
        <div  className={`${homeCss.profile} ${homeCss.row_2}`}>
          <Profileweather></Profileweather>
        </div>
    
        <div className={`${homeCss.news} ${homeCss.rest_row}  ${homeCss.news_box}`}>
          news
        </div>

        <div className={`${homeCss.temp} `}>
          temp
        </div>
      </div> 

    }

    </>
  )
}

export default Home
