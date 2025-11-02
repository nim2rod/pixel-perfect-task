import React from 'react'
import '../styles/cmps/quick-services.css'
import service1 from '../assets/quick-services/service1.svg'
import service2 from '../assets/quick-services/service2.svg'
import service3 from '../assets/quick-services/service3.svg'
import service4 from '../assets/quick-services/service4.svg'


const QuickServices = () => {
  return (
    <div className='quick-services-main'>
        <div className='quick-service-header'>שירותים מהירים </div>
        <div className="quick-services">
            <div className="quick-service-item">הפוליסות שלי
                <img src={service1} alt=""/>
            </div>
            <div className="quick-service-item">הגשת בקשה להודעת בזק
                <img src={service2} alt=""/>
            </div>
            <div className="quick-service-item">בירור סטטוס תביעה
                <img src={service3} alt=""/>
            </div>
            <div className="quick-service-item">עדכון פרטים אישיים
                <img src={service4} alt=""/>
            </div>
        </div>
    </div>
  )
}

export default QuickServices