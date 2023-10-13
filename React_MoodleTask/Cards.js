import React from 'react'
import { Card } from 'react-bootstrap'
import './Cards.css'
import { faCentercode } from '@fortawesome/free-brands-svg-icons'


export default function Cards() {
    return (

        <>
            <h1 >Learn 4.0 Technology </h1>
            <p>Technology refers to methods, systems, and devices which are the result of scientific knowledge being used for practical purposes.</p>
            <div className='containerCard'>

                <div>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>Data Scientist</Card.Title>

                            <Card.Text>
                                Data Scientist handle with data and they contribute in artificial intelligence
                            </Card.Text>
                            <Card.Img src='https://cdn-icons-png.flaticon.com/512/6361/6361001.png' className='responsive-img' style={{ height: "50px", width: "50px", marginLeft: "12rem" }} />
                        </Card.Body>
                    </Card>
                </div>

                <div>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>IOT Developer</Card.Title>

                            <Card.Text>
                                The Internet of Things (IoT) describes the network of physical objects—“things”—that are
                            </Card.Text>
                            <Card.Img src='https://forceintellect.com/wp-content/uploads/2018/02/photo-data-scientist-icon-488262412.jpg' className='responsive-img' style={{ height: "50px", width: "50px", marginLeft: "12rem" }} />
                        </Card.Body>
                    </Card>
                </div>
                <div>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>Web Developer</Card.Title>

                            <Card.Text>
                                Web Developer handle with data and they contribute in artificial intelligence
                            </Card.Text>
                            <Card.Img src='https://static.thenounproject.com/png/48615-200.png' className='responsive-img' style={{ height: "50px", width: "50px", marginLeft: "12rem" }} />
                        </Card.Body>
                    </Card>
                </div>
                <div>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>ML Enginner</Card.Title>

                            <Card.Text>
                                Ml Enginner handle with data and they contribute in artificial intelligence
                            </Card.Text>
                            <Card.Img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqLdu3ZqAWfC7BVMuSwlO-2genRXWdIqLsXQ&usqp=CAU' className='responsive-img' style={{ height: "50px", width: "50px", marginLeft: "12rem" }} />
                        </Card.Body>
                    </Card>
                </div>

            </div>
        </>

    )
}
