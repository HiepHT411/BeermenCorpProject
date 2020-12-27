import React, { Component } from 'react';
class WelcomePageComponent extends Component {
    constructor(props){
        super(props)

        this.state = {

        }
    }
    render() {
        return (
            <div>
                <section class="hero" id="hero">  
                    <div class="container2">
                    <h2 class="sub-headline">
                        <span class="first-letter">W</span>elcome to
                    </h2>
                    <h1 class="headline">Beermen Corporation</h1>
                    <div class="headline-description">
                        <div class="separator">
                            <div class="line line-left"></div>
                            <div class="asterisk"><i class="fas fa-asterisk"></i></div>
                            <div class="line line-right"></div>
                        </div>
                        <div class="single-animation">
                            <h5>Have a beer no fear</h5>
                            <a href="#" class="btn cta-btn">Explore</a>
                        </div>
                    </div>
                    </div>
                </section>

                <section class="discover-our-story">
                    <div class="container2">
                        <div class="brand-info">
                            <div class="brand-description padding-right animate-left">
                                <div class="global-headline">
                                    <h2 class="sub-headline">
                                        <span class="first-letter">D</span>iscover
                                    </h2>
                                    <h1 class="headline headline-dark">Our Story</h1>
                                    <div class="asterisk"><i class="fas fa-asterisk"></i></div>
                                </div>
                                <p>Chào mừng tới Beermen Corporation. Thành lập năm 2020 với 5 thành viên với 
                        mục tiêu cao cả - đem đến những phút giây tận hưởng cho đàn ông Việt.
                            <br></br>
                        Hãy gác lại những ưu phiền mệt mỏi và tận hưởng những hương vị tuyệt vời đến từ những cánh
                        đồng rộng mênh mông trên thế giới.  
                                </p>
                                <a href="#" class="btn body-btn">About us</a>
                            </div>

                            <div class="restaurant-info-img animate-right">
                                <img src = {process.env.PUBLIC_URL+'./images/logo.png'} alt="logo"></img>
                                <img src = "images/logo.png"></img>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="all-kind-of-beer between">
                    <div class="container2">
                        <div class="global-headline">
                            <div class="animate-top">
                                <h2 class="sub-headline">
                                    <span class="first-letter">All kind of</span>
                                </h2>
                            </div>   
                            <div class="animate-bottom">
                                <h1 class="headline">Beer</h1>
                            </div>             
                        </div>
                    </div>

                </section>


                <section class="discover-our-brands">
                    <div class="container2">
                        <div class="brands-demo-menu">
                            <div class="images-group padding-right animate-left">
                                <img src="images/menu-group-1.jpg" alt=""/>
                                <img src="images/menu-group-2.jpg" alt=""/>
                                <img src="images/menu-group-3.jpg" alt=""/>
                                <img src="images/menu-group-4.jpg" alt=""/>
                            </div>
                            <div class="grid-separate animate-right">
                                <div class="global-headline">
                                    <h2 class="sub-headline">
                                        <span class="first-letter">D</span>iscover
                                    </h2>
                                    <h1 class="headline">brands from all over the world</h1>
                                    <div class="asterisk"><i class="fas fa-asterisk"></i></div>
                                </div>
                                <p>Tập hợp được hơn 2000 thương hiệu bia trên thế giới, từ những thương hiệu xa xỉ hay những cái 
                        tên đến từ những khu phố mang đậm nét văn hóa lâu đời 
                        <br></br> Đáp ứng mọi yêu cầu khách hàng <br/> Tự hào là những người đi tiên phong trong việc mang
                        cả hương vị cả thế giới cho người Việt
                                </p>
                                <a href="#" class="btn btn-warning">View the full menu</a>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="high-quality-badge between">
                    <div class="container2">
                        <div class="global-headline">
                            <div class="animate-top">
                                <h2 class="sub-headline">
                                    <span class="first-letter">H</span>igh quality
                                </h2>
                            </div>
                            <div class="animate-bottom">
                                <h1 class="headline">Reasonable price</h1>
                            </div>
                        </div>
                    </div>
                </section>

                <section  class="sample-product">
                    <div class="container2">
                        <div class="sample-product-demo">
                            <div class="product-description padding-right animate-left">
                                <div class="global-headline">
                                    <div class="animate-top">
                                        <h2 class="sub-headline">
                                            <span class="first-letter">R</span>eady
                                        </h2>
                                    </div>
                                    <div class="animate-bottom">
                                        <h1 class="headline headline-dark">for new experiences</h1>
                                    </div>
                                    <div class="asterisk"><i class="fas fa-asterisk"></i></div>
                                </div>
                                <p>
    Bạn là một công ty đầu tư muốn thử sức với lĩnh vực xuất nhập khẩu ? <br/>
    Bạn là một nhà phân phối và muốn hợp tác với chúng tôi ? <br/>
    Bạn là một người tiêu dùng thông minh với mong muốn mua được sản phẩm chất lượng cao và giá thành rẻ ? <br/>
    Còn chần chừ gì nữa mà không đặt hàng ngay hôm nay để trải nghiệm dịch vụ tầm cỡ quốc tế.
                                </p>
                                <a href="#" class="btn btn-warning">Order now</a>
                            </div>
                            <div class="images-group">
                    <img class = "animate-top" src="images/sample-group-4.jpg" alt=""/>
                    <img class = "animate-top" src="images/sample-group-3.jpg" alt=""/>
                    <img class = "animate-bottom" src="images/sample-group-1.jpg" alt=""/>
                    <img class = "animate-bottom" src="images/sample-group-5.jpg" alt=""/>

                            </div>
                        </div>
                    </div>
                </section >
            
            </div>

            
        );
    }
}

export default WelcomePageComponent;