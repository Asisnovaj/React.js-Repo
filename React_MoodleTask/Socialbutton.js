import React from 'react'
import Button from 'react-bootstrap/Button';
import './social.css';
import 'bootstrap/dist/css/bootstrap.css'

export default function Socialbutton() {
    return (
        <div className='page'>
            <>
                <h1> social buttons   </h1>
                <Button variant="warning" className='a'>like</Button>
                <Button variant="light" className='b'>comment</Button>
                <Button variant="primary" className='c'>share</Button>

            </>


        </div>
    )
}
