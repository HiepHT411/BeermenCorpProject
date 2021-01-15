import React, { Component } from 'react';
import BeerService from '../Services/BeerService';
class AddComponent extends Component {
    constructor(props){
        super(props)

            
        this.state = {
            id: this.props.match.params.id,
            name: '',
            quantity: '',
            price: '',
            date: '',
            abv: '',
            packaging: '',
            volume: ''
        
        }
        
    }

    componentDidMount(){
        if(this.state.id == '_add'){
            return
        }
        else{
            BeerService.getBrandByID(this.state.id).then( (res)=> {
                let brand= res.data;
                this.setState({
                    name: brand.name,
                    quantity: brand.quantity,
                    price: brand.price,
                    date: brand.date,
                    abv: brand.abv,
                    packaging: brand.packaging,
                    volume: brand.volume
                });
            });
        }
    }

    getTitle(){
        if(this.state.id == '_add'){
            return <h2 className="text-center">Add new product</h2>
        }
        else{
            return <h2 className="text-center">Update product information</h2>
        }
    }

    changeNameHandler = (event) => {
        this.setState({name: event.target.value});
    }

    changeQuantityHandler = (e) =>{
        this.setState({quantity: e.target.value});
    }

    changePriceHandler = (e)=>{
        this.setState({price: e.target.value});
    }

    changeDateHandler=(e)=>{
        this.setState({date: e.target.value});
    }

    changePackagingHandler=(e)=>{
        this.setState({packaging: e.target.value});
    }

    changeAbvHandler=(e)=>{
        this.setState({abv: e.target.value});
    }

    changeVolumeHandler=(e)=>{
        this.setState({volume: e.target.value});
    }

    saveOrUpdateProduct = (e) =>{
        e.preventDefault();
        var strError = 'ERROR: Invalid value';
        if(parseInt(this.state.quantity) <0 ) this.state.quantity = 'ERROR: Invalid value';
        if(parseFloat(this.state.price) <0) this.state.price = strError;
        if(parseFloat(this.state.abv) <0)this.state.abv = strError;
        if(parseInt(this.state.packaging) <0) this.state.packaging = strError;
        if(parseInt(this.state.volume) <0) this.state.volume = strError;
        let brand = {name: this.state.name, quantity: this.state.quantity, price: this.state.price, date: this.state.date
                    , abv: this.state.abv, packaging: this.state.packaging, volume: this.state.volume};
        
        console.log('brand => ' + JSON.stringify(brand) );

        if(this.state.id == 'add-new-brand'){
            BeerService.createBrand(brand).then((res)=>{
                this.props.history.push('/brands');
            });
        }
        else{
            BeerService.putBrand(brand, this.state.id).then((res)=>{
                this.props.history.push('/brands');
            });
        }
        

    }
    cancel(){
        this.props.history.push('/brands');
    }
    render() {
        return (
            <div>
                
                <div className="container">
                    <div className="col-md-6 offset-md-3 offset-md-3">
                        { this.getTitle()}
                        <div className="card-body">
                            <form>
                                <div class="form-group">
                                    <label>Brand Name: </label>
                                    <input placeholder="Brand Name" name="name" class="form-control"
                                        value={this.state.name} onChange={this.changeNameHandler}></input>
                                </div>

                                <div class="form-group">
                                    <label>Quantity: </label>
                                    <input placeholder="Quantity" name="quantity" class="form-control"
                                        value={this.state.quantity} onChange={this.changeQuantityHandler}/>
                                </div>

                                <div class="form-group">
                                    <label>Price: </label>
                                    <input placeholder="Price" name="price" class="form-control"
                                        value={this.state.price} onChange={this.changePriceHandler}/>
                                </div>

                                <div class="form-group">
                                    <label>Date:</label>
                                    <input placeholder="Date" name="date" class="form-control"
                                        value={this.state.date} onChange={this.changeDateHandler}/>
                                </div>

                                <div class="form-group">
                                    <label>Packaging:</label>
                                    <input placeholder="Packaging" name="packaging" class="form-control"
                                        value={this.state.packaging} onChange={this.changePackagingHandler}/>
                                </div>

                                <div class="form-group">
                                    <label>Volume(can/bottle)</label>
                                    <input placeholder="Volume" name="volume" class="form-control"
                                        value={this.state.volume} onChange={this.changeVolumeHandler}/>
                                </div>

                                <div class="form-group">
                                    <label>Ancohol by volume:</label>
                                    <input placeholder="Ancohol by volume" name="abv" class="form-control"
                                        value={this.state.abv} onChange={this.changeAbvHandler}/>
                                </div>

                                <button className="btn btn-success" onClick={this.saveOrUpdateProduct}>Save</button>
                                <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                <br></br>
                                <br></br>
                                
                           </form>
                        </div>

                    </div>
                    
                    
                </div>


            </div>
        );
    }
}

export default AddComponent;