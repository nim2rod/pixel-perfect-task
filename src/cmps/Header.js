import React from 'react'
import '../styles/cmps/header.css'
import searchIcon from '../assets/header/search.svg'
import themeIcon from '../assets/header/theme.svg'
import union from '../assets/header/union.svg'
import logo from '../assets/header/logo.svg'

const Header = () => {
    return (
        <header className="app-header">
            <div className='left-header'>
                <div className='log-in-btn'>כניסה לאיזור האישי
                    <img src={union} alt="" />
                </div>
                <img src={themeIcon} alt="" />
                <img src={searchIcon} alt="" />
                <div>English</div>
            </div>
            <div className='right-header'>
                <div className='header-btns'>
                    <div>שירות לקוחות</div>
                    <div>מה חדש?</div>
                    <div>אודות</div>
                    <div>ענפי ביטוח</div>
                </div>
                {/* <div>LOGO</div> */}
                <img src={logo} alt=""/>
            </div>
        </header>
    )
}

export default Header