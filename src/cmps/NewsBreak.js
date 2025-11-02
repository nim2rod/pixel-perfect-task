import React from 'react'
import '../styles/cmps/news-break.css'
import pause from '../assets/news-break/pause-btn.svg'

const NewsBreak = () => {
  return (
    <div className='news-break'>
        <div>כדי להמנע מהמתנה ממושכת במענה הטלפוני שלנו, אנחנו</div>
        <div>|</div>
        <p>חדשות ועדכונים</p>
        <img src={pause} alt=""/>
    </div>
  )
}

export default NewsBreak