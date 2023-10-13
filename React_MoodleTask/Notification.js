import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import{FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import{faCircleCheck,faBell,faCircleExclamation} from '@fortawesome/free-solid-svg-icons'
export default function Notification(){
    return(
            <div className='container'>
                <h1 style={{textAlign:"center" }}>Notifications</h1>
                <h1 className='bg-primary p-2'><FontAwesomeIcon icon={faCircleCheck} />Information Message</h1>
                <h1 className='bg-success p-2'><FontAwesomeIcon icon={faCircleCheck} />Success Message</h1>
                <h1 className='bg-warning p-2'><FontAwesomeIcon icon={faBell} />Warning Message</h1>
                <h1 className='bg-danger p-2'><FontAwesomeIcon icon={faCircleExclamation} />Error Message</h1>
            </div>
          );
        }