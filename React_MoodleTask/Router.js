import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Task1 from './Task1'
import { Navbar, Nav, NavbarCollapse } from 'react-bootstrap'
import Task2 from './task2'
import Socialbutton from './Socialbutton'
import Login from './Login'
import Notification from './Notification'
import Superover from './Super over '
import Cards from './Cards'
import Container from 'react-bootstrap/Container';

import NavDropdown from 'react-bootstrap/NavDropdown';



export default function Router() {
    return (
        <>
            <BrowserRouter>
                <Navbar expand="lg" className="bg-body-tertiary bg-light">
                    <Container>
                        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link as={Link} to={'/task1'}>task1</Nav.Link>
                                <Nav.Link as={Link} to={'/task2'}>task2</Nav.Link>
                                <Nav.Link as={Link} to={'/Superover'}>task3</Nav.Link>
                                <Nav.Link as={Link} to={'/Socialbutton'}>task4</Nav.Link>
                                <Nav.Link as={Link} to={'/Login'}>task5</Nav.Link>
                                <Nav.Link as={Link} to={'/Notification'}>task6</Nav.Link>
                                <Nav.Link as={Link} to={'/Cards'}>task7</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>



                    </Container>
                </Navbar>

                <Routes>
                    <Route path='/task1' element={<Task1 />} />
                    <Route path='/task2' element={<Task2 />} />
                    <Route path='/Superover' element={<Superover />} />
                    <Route path='/Socialbutton' element={<Socialbutton />} />
                    <Route path='/Login' element={<Login />} />
                    <Route path='/Notification' element={<Notification />} />
                    <Route path='/Cards' element={<Cards />} />
                </Routes>

            </BrowserRouter>
        </>



    )
}
