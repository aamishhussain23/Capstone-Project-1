import React from 'react'
import profileCss from '../styles/profile.module.css'
import userImg from '../assets/userImg.png'

function Profileweather() {
  return (
    <div className={profileCss.profile}>
      
        <img src={userImg} alt="" />
      
      <div className={profileCss.right_part}>
            <div className={profileCss.p_tags}>
                <p className={profileCss.name}>KK Vinay</p>
                <p className={profileCss.email}>Vinay090@gmail.com</p>
                <p className={profileCss.username}>vinay060</p>
            </div>
            <div className={profileCss.buttons}>
                <Button></Button>
                <Button></Button>
                <Button></Button>
                <Button></Button>
                <Button></Button>
                <Button></Button>
                <Button></Button>
                <Button></Button>
            </div>
            
      </div>
    </div>
  )
}

export default Profileweather


function Button() {
  return (
    <button className={profileCss.btn}><span>Horror</span></button>
  )
}

