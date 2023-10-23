import React from 'react'
import tempCss from '../styles/temp.module.css'

function Temp() {
  return (
    <div className={tempCss.container}>
        <div className={tempCss.date_time}>
            <div className={tempCss.date1}>
                2-20-2023
            </div>
            <div className={tempCss.time1}>
                07:35 PM
            </div>
        
        </div>
        <div className={tempCss.temperature}>

            <div className={tempCss.weather}>

                <img src="" alt="" className={tempCss.weather_logo}/>

                <div className={tempCss.weather_type}>
                    Heavy rain
                </div>
            </div>

            <div className={tempCss.pipe}>

            </div>

            <div className={tempCss.degree}>
                <div className={tempCss.celcius}>
                        24 C
                </div>

                <div className={tempCss.pressure}>
                    <img src="" alt="" className={tempCss.img}/>
                    <div className={tempCss.mbar}>
                        1010 mbar Pressure
                    </div>

                </div>
            </div>

            <div className={tempCss.pipe}>

            </div>

            <div className={tempCss.others}>
                <div className={tempCss.wind}>
                    <img src="" alt="" className={tempCss.img}/>
                    <div className={tempCss.unit}>
                        3.7 km/h Wind
                    </div>
                </div>

                <div className={tempCss.condition}>
                    <img src="" alt="" className={tempCss.img}/>
                    <div className={tempCss.humidity}>
                        83% Humidity
                    </div>

                </div>
            </div>

        </div>
    </div>
  )
}

export default Temp