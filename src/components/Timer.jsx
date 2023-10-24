import React from 'react'
import timerCss from '../styles/timer.module.css'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import arrow from '../assets/arrow.png'

function Timer() {
  return (
    <div className={timerCss.timer}>
      <Clock></Clock>
      
      <div className={timerCss.time_setter}>

        <div style={{width: '100%'}} className={timerCss.flex}>
          <span style={{fontSize: 'x-large', color: '#949494'}}>Hours</span>
          <span style={{fontSize: 'x-large', color: '#949494'}}>Minutes</span>
          <span style={{fontSize: 'x-large', color: '#949494'}}>Seconds</span>
        </div>

        <div style={{width: '100%'}} className={timerCss.flex}>
          <img style={{marginLeft: '4%'}} src={arrow} alt="" />
          <img style={{marginRight: '3%'}} src={arrow} alt="" />
          <img style={{marginRight: '8%'}} src={arrow} alt="" />
        </div>

        <div style={{width: '100%'}} className={timerCss.flex}>
          <input style={{outline: 'none', backgroundColor: 'transparent', border: 'none', color: '#fff', marginLeft: '1%' ,width: '3rem', fontSize: 'xx-large', textAlign: 'center'}} placeholder={'00'} type="number" /> 

          <span style={{fontSize: '2.5rem'}}>:</span>

          <input style={{outline: 'none', backgroundColor: 'transparent', border: 'none', color: '#fff', marginRight: '3%' ,width: '3rem', fontSize: 'xx-large', textAlign: 'center'}} placeholder='00' type="number" />

          <span style={{fontSize: '2.5rem'}}>:</span>

          <input style={{outline: 'none', backgroundColor: 'transparent', border: 'none', color: '#fff',marginRight: '5%' ,width: '3rem', fontSize: 'xx-large', textAlign: 'center'}} placeholder={'00'} type="number" />
        </div>

        <div style={{width: '100%'}} className={timerCss.flex}>
          <img style={{marginLeft: '4%', rotate: '180deg'}} src={arrow} alt="" />
          <img style={{marginRight: '3%', rotate: '180deg'}} src={arrow} alt="" />
          <img style={{marginRight: '8%', rotate: '180deg'}} src={arrow} alt="" />
        </div>

        <button style={{width: '100%', borderRadius: '2rem' , backgroundColor: '#FF6A6A', fontSize: '1.5rem'}}>Start</button>
      </div>

      


    </div>
  )
}


const Clock = () => {
  return (
    <CountdownCircleTimer
      isPlaying
      duration={10} // Total duration in seconds
      colors={['#004777', '#F7B801', '#A30000', '#A30000']}
      colorsTime={[7, 5, 2, 0]}
    >
      {({ remainingTime }) => {
        const hours = Math.floor(remainingTime / 3600);
        const minutes = Math.floor((remainingTime % 3600) / 60);
        const seconds = remainingTime % 60;

        const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

        return (
          <div>
            <div style={{fontSize: '2rem' }}>{formattedTime}</div>
          </div>
        );
      }}
    </CountdownCircleTimer>
  );
};


export default Timer
