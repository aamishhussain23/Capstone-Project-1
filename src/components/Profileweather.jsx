import React from 'react'
import profileCss from '../styles/profile.module.css'
import userImg from '../assets/userImg.png'

function Profileweather({status}) {
  return (
    <div className={  `${profileCss.profile}` }>
      
        <img src={userImg} alt="" />
      
      <div className={profileCss.right_part}>
            <div className={profileCss.p_tags}>
                <p className={ status ? `${profileCss.name}` : `${profileCss.name2}`}>KK Vinay</p>
                <p className={ status ? `${profileCss.email}` : `${profileCss.email2}`}>Vinay090@gmail.com</p>
                <p className={ status ? `${profileCss.username}` : `${profileCss.username2}`}>vinay060</p>
            </div>
            <div className={status ? `${profileCss.buttons}` : `${profileCss.buttons2}`}>
                <Button></Button>
                <Button></Button>
                <Button></Button>
                <Button></Button>
                {/* <Button></Button>
                <Button></Button>
                <Button></Button>
                <Button></Button> */}
            </div>
            
      </div>
    </div>
  )
}

export default Profileweather


function Button() {
  return (
    <button className={ `${profileCss.btn}`}><span>Horror</span></button>
  )
}

