import React, { Component } from 'react';
import BeerService from '../Services/BeerService';

class ShowmoreComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            id: this.props.match.params.id,
            brand: {}
        }
    }

    componentDidMount(){
        BeerService.getBrandByID(this.state.id).then( res=> {
            this.setState({brand: res.data});
        });
    }
    render() {
        return (
            <div>
                
                <div className="card col-md-6 offset-md-3">
                <form>
                    <h2 className="text-center">Product Details Infomation</h2>
                    <div className="row">
                        <label>Name:</label>
                        <div>{this.state.brand.name}</div>
                    </div>
                    <br/>
                    <div className="row">
                        <label>Quantity(carton):</label>
                        <div>{this.state.brand.quantity}</div>
                    </div>
                    <br/>
                    <div className = "row">
                        <label>Price(per carton):</label>
                        <div>{this.state.brand.price}</div>
                    </div>
                    <br/>
                    <div class="row">
                        <label>Date:</label>
                        <div>{this.state.brand.date}</div>
                    </div>
                    <br/>
                    <div class="row">
                        <label>Packaging: </label>
                        <div>{this.state.brand.packaging}</div>
                    </div>
                    <br/>
                    <div className="row">
                        <label>Volume:</label>
                        <div>{this.state.brand.volume}</div>
                    </div>
                    <br/>
                    <div className="row">
                        <label>Ancohol by volume:</label>
                        <div>{this.state.brand.abv}</div>
                    </div>
                    <br></br>
                    <a href="/brands">Back to product list</a>
                </form>
                </div>

            </div>
        );
    }
}

export default ShowmoreComponent;