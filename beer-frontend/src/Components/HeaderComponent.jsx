import React, { Component } from 'react';

import * as NavBar from "react-bootstrap";
class HeaderComponent extends Component {
    constructor(props){
        super(props)

        this.state = {

        }
        
    }
    

    render() {
        return (
            <div>
               <NavBar.Navbar className="color-nav" expand="sm">
                    <NavBar.Navbar.Brand className="teamname" href="http://localhost:3000">Beermen Corporation</NavBar.Navbar.Brand>
                    <NavBar.Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <NavBar.Navbar.Collapse id="basic-navbar-nav">
                            <NavBar.Nav className="mr-auto">
                            <NavBar.Nav.Link class= "active" href="http://localhost:3000">Home</NavBar.Nav.Link>
                            <NavBar.Nav.Link href="https://github.com/HiepHT411/BeermanCorpProject.git">Github Link</NavBar.Nav.Link>
                            <NavBar.NavDropdown title="About Us" id="basic-nav-dropdown">
                                <NavBar.NavDropdown.Item href="#">Giảng viên hướng dẫn</NavBar.NavDropdown.Item>
                                <NavBar.NavDropdown.Divider/>
                                <NavBar.NavDropdown.Item href="#action/3.1">Hoàng Tuấn Hiệp</NavBar.NavDropdown.Item>
                                <NavBar.NavDropdown.Item href="#action/3.2">Nguyễn Hải Long</NavBar.NavDropdown.Item>
                                <NavBar.NavDropdown.Item href="#action/3.3">Trịnh Hoàng Tân</NavBar.NavDropdown.Item>
                                <NavBar.NavDropdown.Item href="http://localhost:3000/add-brand/_add">Phan Quang Tuấn</NavBar.NavDropdown.Item> 
                                <NavBar.NavDropdown.Item >Đinh Giang Long</NavBar.NavDropdown.Item>                           
                            </NavBar.NavDropdown>
                            <NavBar.Nav.Link href="#" className = "disable">Staff schedule</NavBar.Nav.Link>
                            </NavBar.Nav>
                            <NavBar.Form inline className="searchingForm">
                                <NavBar.FormControl type="text" placeholder="Search" className="mr-sm-2" />
                                <NavBar.Button className="button-search" variant="">Search</NavBar.Button>
                            </NavBar.Form>
                        </NavBar.Navbar.Collapse>
                </NavBar.Navbar>
            </div>
        );
    }
}

export default HeaderComponent;