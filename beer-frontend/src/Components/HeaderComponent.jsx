import React, { Component } from 'react';

import * as NavBar from "react-bootstrap";
import BeerService from '../Services/BeerService';
class HeaderComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            brands : [],
            search_text : ''
        }
        

        this.searchModuleHandler = this.searchModuleHandler.bind(this);
    }

    componentDidMount(){
        BeerService.getBrand().then((res) => {
            this.setState({brands: res.data});
        });
        
    }
    
    setSearchContent = (event) => {
        this.setState({search_text: event.target.value });
    }

    searchModuleHandler() {

        // if(this.state.search_text == '')
        //     return

        // this.state.brands.map(
        //     brand => {
        this.state.brands.forEach( function(brand){
            if(this.state.search_text.toLowerCase().localeCompare(brand.name.toLowerCase()) == 0 ){
                this.props.history.push(`showmoreinfo-brand/${brand.id}`);
            }
            // else{
            //     this.props.history.push('/brands');
            // }
        });
    }

    render() {
        return (
            // <div>
            //    <NavBar.Navbar className="color-nav" expand="sm">
            //         <NavBar.Navbar.Brand className="teamname" href="http://localhost:3000">Beermen Corporation</NavBar.Navbar.Brand>
            //         <NavBar.Navbar.Toggle aria-controls="basic-navbar-nav" />
            //             <NavBar.Navbar.Collapse id="basic-navbar-nav">
            //                 <NavBar.Nav className="mr-auto" style={{color: '#fff'}}>
            //                 <NavBar.Nav.Link class= "" href="http://localhost:3000/brands">Home</NavBar.Nav.Link>
            //                 <NavBar.Nav.Link href="https://github.com/HiepHT411/BeermenCorpProject.git">Github Link</NavBar.Nav.Link>
            //                 <NavBar.NavDropdown title="About Us" id="basic-nav-dropdown">
            //                     <NavBar.NavDropdown.Item href="#">Giảng viên hướng dẫn</NavBar.NavDropdown.Item>
            //                     <NavBar.NavDropdown.Divider/>
            //                     <NavBar.NavDropdown.Item href="#action/3.1">Hoàng Tuấn Hiệp</NavBar.NavDropdown.Item>
            //                     <NavBar.NavDropdown.Item href="#action/3.2">Nguyễn Hải Long</NavBar.NavDropdown.Item>
            //                     <NavBar.NavDropdown.Item href="#action/3.3">Trịnh Hoàng Tân</NavBar.NavDropdown.Item>
            //                     <NavBar.NavDropdown.Item href="#abcefg">Phan Quang Tuấn</NavBar.NavDropdown.Item> 
            //                     <NavBar.NavDropdown.Item href="#ádfg">Đinh Giang Long</NavBar.NavDropdown.Item>                           
            //                 </NavBar.NavDropdown>
            //                 <NavBar.Nav.Link href="http://localhost:3000/staffSchedule">Staff schedule</NavBar.Nav.Link>
            //                 </NavBar.Nav>

            //                 <NavBar.Form inline className="searchingForm">
            //                     <NavBar.FormControl type="text" placeholder="Search.."  className="mr-sm-2 search_text" >
            //                        {/*} <NavBar.InputGroup name="search" value={this.state.search_text} onChange={this.setSearchContent}></NavBar.InputGroup>   */}
            //                     </NavBar.FormControl>
                                
            //                     <NavBar.Button className="button-search" onClick={()=> this.searchModuleHandler(this.state.search_text)} variant="">Search</NavBar.Button>
            //                 </NavBar.Form>
                            
            //             </NavBar.Navbar.Collapse>
            //     </NavBar.Navbar>
            //</div>
            <div>
                <nav class="color-nav navbar navbar-expand-sm ">
                    <a href="http://localhost:3000" class="teamname navbar-brand">Beermen Corporation</a>
                    {/* <button aria-controls="basic-navbar-nav" type="button" aria-label="Toggle navigation" class="navbar-toggler collapsed">
                        <span class="navbar-toggler-icon"></span>
                    </button> */}
                    <div class="navbar-collapse collapse" id="basic-navbar-nav">
                        <div class="mr-auto navbar-nav">
                            <a class="nav-link" href="http://localhost:3000/brands" data-rb-event-key="http://localhost:3000">Home</a>
                            <a href="https://github.com/HiepHT411/BeermenCorpProject.git" data-rb-event-key="https://github.com/HiepHT411/BeermenCorpProject.git" class="nav-link">Github Link</a>
                            
                            <div class="dropdown nav-item">
                                <a data-toggle="dropdown" href="#" aria-haspopup="true" aria-expanded="false" id="basic-nav-dropdown" href="#" class="dropdown-toggle nav-link" role="button">About Us</a>
                                <div className="dropdown-menu" aria-labelledby="basic-nav-dropdown">
                                    <a className="dropdown-item" href="">Giảng viên hướng dẫn</a>
                                    <div className= "dropdown-divider"></div>
                                    <a className="dropdown-item" href="">Hoàng Tuấn Hiệp</a>
                                    <a className="dropdown-item" href="">Nguyễn Hải Long</a>
                                    <a className="dropdown-item" href="">Trịnh Hoàng Tân</a>
                                    <a className="dropdown-item" href="">Phan Quang Tuấn</a>
                                    <a className="dropdown-item" href="">Đinh Giang Long</a>
                                </div>
                            </div>
                            <a href="http://localhost:3000/staffSchedule" data-rb-event-key="http://localhost:3000/staffSchedule" class="nav-link">Staff schedule</a>
                            </div>
                            <form class="searchingForm form-inline">
                                <input placeholder="Search.." type="text" name="search_text" value={this.state.search_text} onChange={this.setSearchContent} class="mr-sm-2 search_text form-control"/>
                                    <button type="button" onClick={this.searchModuleHandler} class="btn button-search">Search</button>
                            </form>
                        </div>
                </nav>
            </div>
        );
    }
}

export default HeaderComponent;