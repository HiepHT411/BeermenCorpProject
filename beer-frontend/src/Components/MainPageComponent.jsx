import React, { Component } from 'react';
import BeerService from '../Services/BeerService';

class MainPageComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            brands: []
        }

        this.addBrand = this.addBrand.bind(this);
        this.editBrand = this.editBrand.bind(this);
        this.deleteBrand = this.deleteBrand.bind(this);
        this.showMoreInfo = this.showMoreInfo.bind(this);

    }
    
    componentDidMount(){
        BeerService.getBrand().then((res)=> {
            this.setState({brands: res.data});
        })
    }

    addBrand(){
        this.props.history.push('/add-brand/_add');
    }

    editBrand(id){
        this.props.history.push(`add-brand/${id}`);
    }

    deleteBrand(id){
        BeerService.deleteBrand(id).then((res)=> {
            this.setState({brands: this.state.brands.filter(brand => brand.id !== id)});
        })
    }

    showMoreInfo(id){
        this.props.history.push(`showmoreinfo-brand/${id}`);
    }


    

    render() {
        return (
        <div >
            <div className = "container ">
                <img class = "sticky-logo" src = "./images/logo.png">
                
                </img>
                <h2 className = "text-center">Product list</h2>
                <div className = "button-add">
                    <button className="btn btn-primary" onClick = {()=> this.addBrand()}>New product</button>
                </div>

                <div className = "row-table">
                    <table className = "table table-striped table-bordered">
                        <thead>
                            <tr class = "title">
                                <th class = "nameElement">Brand</th>
                                <th class = "quantityElement">Quantity(carton)</th>
                                <th class = "priceElement">Price($/carton)</th>
                                <th class = "actionElement">Action</th>
                            </tr>
                        </thead>

                        <tbody className="content">
                            {
                                this.state.brands.map(
                                    brand =>
                                    <tr key={brand.id}>
                                        <td>{brand.name}</td>
                                        <td>{brand.quantity}</td>
                                        <td>{brand.price}</td>
                                        <td>
                                            <button onClick={()=> this.editBrand(brand.id)} className="btn btn-info">Update</button>
                                            <button onClick={()=> this.deleteBrand(brand.id)} className="btn btn-danger" style={{marginLeft:"10px"}}>Delete</button>
                                            <button onClick={()=> this.showMoreInfo(brand.id)} className="btn btn-link" style={{marginLeft:"10px"}}>More..</button>
                                        </td>
                                    </tr>
                                )

                            }

                        </tbody>


                    </table>
                </div>
                            
            </div>

            <div class="side-bar ">
                    <a onClick={()=> this.props.history.push('/brands')}><i class="fa fa-fw fa-home"></i>Home</a>

                    <div class="social-links">
                        <a ><i class="fa fa-fw fa-wrench"></i> Services</a>
                        <a href="#"><i class="fa fa-fw fa-user"></i> Clients</a>
                        <a href="#"><i class="fa fa-fw fa-envelope"></i> Contact</a>
                       
                    </div>

                        <div class="useful-links">
                            <a href="https://facebook.com"><i class="fab fa-facebook"></i></a>
                            <a href="https://www.google.com"><i class="fab fa-google-plus-g"></i></a>
                            <a href="https://youtube.com"><i class=" fab fa-youtube"></i></a>
                            <a href="https://instagram.com"><i class="fab fa-instagram"></i></a>
                            <a href="#"><i class="fab fa-twitter"></i></a>
                        </div>
                    </div>
                    
        </div>
        );
    }
}

export default MainPageComponent;