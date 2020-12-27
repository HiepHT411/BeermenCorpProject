import React, { Component } from 'react';

class FooterComponent extends Component {
    constructor(pros){
        super(pros)

        this.state = {

        }
    }
    render() {
        return (
            <div>
                <footer className = "footer">
                    <div class = "container-fluid padding">
                        <div class = "row text-center">
                            <div class = "col-md-4">
                                <h5>Contact</h5>
                                <hr class="light"></hr>
                                <p>SDT: 0901 23 45 67</p>
                                <p>email: beermencorp@gmail.com</p>
                                <p>Hanoi University of sicence and technology</p>
                                <p>Hanoi - Vietnam</p>
                            </div>

                            <div class= "col-md-4">
                                
                                <h5>Work hour</h5>
                                <hr class="light"></hr>
                                <p>Monday - Friday: 6:45 - 17:30</p>
                                <p>Weekend: 8:00 - 17:00</p>
                                <p>Holiday: closed</p>
                            </div>

                            <div class = "col-md-4">
                                
                                <h5>Service Area</h5>
                                <hr class = "light"/>
                                <p>Asia</p>
                                <p>America</p>
                                <p>Europe</p>
                                <p>Africa</p>
                            </div>
                        </div>
                        <div class = "col-12">
                            <hr class = "endpage"/>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}

export default FooterComponent;