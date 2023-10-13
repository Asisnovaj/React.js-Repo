import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons'
import './login.css'
export default function Login() {
    return (
        <>
            <div className="bg-light h-5 w-5 mt-5 frist">
                <div className='container'>
                    <div className='row'>
                        <div className=' col-sm-6 col-lg-6 col-md-6 col-xl-6'>
                            <img src='https://static.vecteezy.com/system/resources/thumbnails/000/601/304/small/5.jpg'></img>
                        </div>

                        <div className='col-sm-6 col-lg-6 col-md-6 col-xl-6'>
                            <h1> Member Login</h1>
                            <div>
                                <FontAwesomeIcon icon={faEnvelope} />
                                <input type='email' placeholder='e-mail' /><br />
                                <br />
                            </div>
                            <div>
                                <FontAwesomeIcon icon={faLock} />
                                <input type='password' placeholder='****' /><br /><br />
                            </div>
                            <button className='btn btn-success'>Login</button><br /><br />
                            <span>Forget</span> <span style={{ color: 'green' }}>username/password</span><br></br>
                            <h6 style={{ color: 'green' }}> create your account</h6>
                        </div>
                    </div>
                </div>

            </div>
        </>

    )
}
