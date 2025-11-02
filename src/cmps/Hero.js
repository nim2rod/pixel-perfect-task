import React from 'react';
import '../styles/cmps/hero.css';
import heroImage from '../assets/hero/hero-img.png';
import details from '../assets/hero/details-btn.svg';
import QuickServices from './QuickServices';

const Hero = () => {
    return (
        <section className="hero">
            <img src={heroImage} alt="Hero banner" className="hero__img" />

            <div className="hero__overlay">
                <div className="hero__quick">
                    {/* כאן נכניס מאוחר יותר את הקומפוננטה של QuickServices */}
                    {/* <div className="hero__quick-placeholder">שירותים מהירים</div> */}
                    <QuickServices />
                </div>

                <div className="hero__content">
                    <div style={{ fontSize: '2.2rem', fontWeight: '700' }}>
                        קנט - קרן לביטוח נזקי טבע בחקלאות
                    </div>
                    <div style={{ fontSize: '1.6rem' }}>כי לטבע חוקים משלו</div>
                    <div style={{ fontSize: '1rem' }}>הגן על העסק שלך עם ביטוח של קנט</div>
                    <img className='more-details' src={details} alt="for more details"/>
                </div>
            </div>
        </section>
    );
};

export default Hero;
