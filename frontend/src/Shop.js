import React from 'react';
import im6 from './components/image/im6.jpg';
import './shop.css';


export const Shop = () => {
    return (
        <>
        <div className="line2"></div> 
        <div class="btn-group">
        <a class="button3" role="button" href="/Signup">Sports Wears</a>
        <a class="button3" role="button" href="/Signup">Suppliments</a>
        <a class="button3" role="button" href="/Signup">Equipments</a>
        </div>
                
        <div class="container">     

        <div className="line2"></div> 
            <div class="row">
                <div class="col-md-3 col-sm-6">
                    <div class="product-grid">
                        <div class="product-image">
                            <a href="#">
                                <img class="pic-1" src={im6}/>
                                <img class="pic-2" src={im6}/>
                            </a>
                            <ul class="social">
                                <li><a href="" data-tip="Quick View"><i class="fa fa-search"></i></a></li>
                                <li><a href="" data-tip="Add to Wishlist"><i class="fa fa-shopping-bag"></i></a></li>
                                <li><a href="" data-tip="Add to Cart"><i class="fa fa-shopping-cart"></i></a></li>
                            </ul>
                            <span class="product-new-label">Sale</span>
                            <span class="product-discount-label">20%</span>
                        </div>
                        <ul class="rating">
                            <li class="fa fa-star"></li>
                            <li class="fa fa-star"></li>
                            <li class="fa fa-star"></li>
                            <li class="fa fa-star"></li>
                            <li class="fa fa-star disable"></li>
                        </ul>
                        <div class="product-content">
                            <h3 class="title"><a class="btn3 warning" id="myBtn" href="#popup">Men's Plain Tshirt</a></h3>
                            <div class="price">$16.00
                                <span>$20.00</span>
                            </div>
                            <a class="add-to-cart" href="">+ Add To Cart</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 col-sm-6">
                    <div class="product-grid">
                        <div class="product-image">
                            <a href="#">
                                <img class="pic-1" src={im6}/>
                                <img class="pic-2" src={im6}/>
                            </a>
                            <ul class="social">
                                <li><a href="" data-tip="Quick View"><i class="fa fa-search"></i></a></li>
                                <li><a href="" data-tip="Add to Wishlist"><i class="fa fa-shopping-bag"></i></a></li>
                                <li><a href="" data-tip="Add to Cart"><i class="fa fa-shopping-cart"></i></a></li>
                            </ul>
                            <span class="product-new-label">Sale</span>
                            <span class="product-discount-label">50%</span>
                        </div>
                        <ul class="rating">
                            <li class="fa fa-star"></li>
                            <li class="fa fa-star"></li>
                            <li class="fa fa-star"></li>
                            <li class="fa fa-star"></li>
                            <li class="fa fa-star"></li>
                        </ul>
                        <div class="product-content">
                        <h3 class="title"><a class="btn3 warning" id="myBtn" href="#popup">Men's Plain Tshirt</a></h3>
                            <div class="price">$5.00
                                <span>$10.00</span>
                            </div>
                            <a class="add-to-cart" href="">+ Add To Cart</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 col-sm-6">
                    <div class="product-grid">
                        <div class="product-image">
                            <a href="#">
                                <img class="pic-1" src={im6}/>
                                <img class="pic-2" src={im6}/>
                            </a>
                            <ul class="social">
                                <li><a href="" data-tip="Quick View"><i class="fa fa-search"></i></a></li>
                                <li><a href="" data-tip="Add to Wishlist"><i class="fa fa-shopping-bag"></i></a></li>
                                <li><a href="" data-tip="Add to Cart"><i class="fa fa-shopping-cart"></i></a></li>
                            </ul>
                            <span class="product-new-label">Sale</span>
                            <span class="product-discount-label">50%</span>
                        </div>
                        <ul class="rating">
                            <li class="fa fa-star"></li>
                            <li class="fa fa-star"></li>
                            <li class="fa fa-star"></li>
                            <li class="fa fa-star"></li>
                            <li class="fa fa-star"></li>
                        </ul>
                        <div class="product-content">
                        <h3 class="title"><a class="btn3 warning" id="myBtn" href="#popup">Men's Plain Tshirt</a></h3>
                            <div class="price">$5.00
                                <span>$10.00</span>
                            </div>
                            <a class="add-to-cart" href="">+ Add To Cart</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 col-sm-6">
                    <div class="product-grid">
                        <div class="product-image">
                            <a href="#">
                                <img class="pic-1" src={im6}/>
                                <img class="pic-2" src={im6}/>
                            </a>
                            <ul class="social">
                                <li><a href="" data-tip="Quick View"><i class="fa fa-search"></i></a></li>
                                <li><a href="" data-tip="Add to Wishlist"><i class="fa fa-shopping-bag"></i></a></li>
                                <li><a href="" data-tip="Add to Cart"><i class="fa fa-shopping-cart"></i></a></li>
                            </ul>
                            <span class="product-new-label">Sale</span>
                            <span class="product-discount-label">50%</span>
                        </div>
                        <ul class="rating">
                            <li class="fa fa-star"></li>
                            <li class="fa fa-star"></li>
                            <li class="fa fa-star"></li>
                            <li class="fa fa-star"></li>
                            <li class="fa fa-star"></li>
                        </ul>
                        
                        <div class="product-content">
                        <h3 class="title"><a class="btn3 warning" id="myBtn" href="#popup">Men's Plain Tshirt</a></h3>
                            <div class="price">$5.00
                                <span>$10.00</span>
                            </div>
                            <a class="add-to-cart" href="">+ Add To Cart</a>
                        </div>

                                                
                    </div>
                </div>
            </div>
        </div>

        <div class="popup" id="popup">
            <div class="popup-inner">
                <div class="popupphoto">
                    <img src={im6} alt=""/>
                </div>
                <div class="popuptext">
                <h1>Men's Plain Tshirt</h1>
                <p>Outtobe Men Sport Shorts Crossfit Running Shorts Training GYM Fitness Pants Fast Dry Breathable Fitness Shorts Training Exercise Joggers Workout Casual Jogging Sweat Pants Gym Exercise Shorts with Pocket.</p>
                <table >
                    <tr>
                        <th className="h1">Size:</th>
                        <td className="t1">S / M / L / XL / XXL</td>
                    </tr>
                    <tr>
                        <th className="h1">Color:</th>
                        <td className="t1">Black / White</td>
                    </tr>
                </table>
                </div>
                <a class="closepopup" href="#">X</a>
            </div>
        </div>


        <div className="line2"></div> 
        <div class="container">
            
            <div class="row">
                <div class="col-md-3 col-sm-6">
                    <div class="product-grid">
                        <div class="product-image">
                            <a href="#">
                                <img class="pic-1" src={im6}/>
                                <img class="pic-2" src={im6}/>
                            </a>
                            <ul class="social">
                                <li><a href="" data-tip="Quick View"><i class="fa fa-search"></i></a></li>
                                <li><a href="" data-tip="Add to Wishlist"><i class="fa fa-shopping-bag"></i></a></li>
                                <li><a href="" data-tip="Add to Cart"><i class="fa fa-shopping-cart"></i></a></li>
                            </ul>
                            <span class="product-new-label">Sale</span>
                            <span class="product-discount-label">20%</span>
                        </div>
                        <ul class="rating">
                            <li class="fa fa-star"></li>
                            <li class="fa fa-star"></li>
                            <li class="fa fa-star"></li>
                            <li class="fa fa-star"></li>
                            <li class="fa fa-star disable"></li>
                        </ul>
                        <div class="product-content">
                        <h3 class="title"><a class="btn3 warning" id="myBtn" href="#popup">Men's Plain Tshirt</a></h3>
                            <div class="price">$16.00
                                <span>$20.00</span>
                            </div>
                            <a class="add-to-cart" href="">+ Add To Cart</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 col-sm-6">
                    <div class="product-grid">
                        <div class="product-image">
                            <a href="#">
                                <img class="pic-1" src={im6}/>
                                <img class="pic-2" src={im6}/>
                            </a>
                            <ul class="social">
                                <li><a href="" data-tip="Quick View"><i class="fa fa-search"></i></a></li>
                                <li><a href="" data-tip="Add to Wishlist"><i class="fa fa-shopping-bag"></i></a></li>
                                <li><a href="" data-tip="Add to Cart"><i class="fa fa-shopping-cart"></i></a></li>
                            </ul>
                            <span class="product-new-label">Sale</span>
                            <span class="product-discount-label">50%</span>
                        </div>
                        <ul class="rating">
                            <li class="fa fa-star"></li>
                            <li class="fa fa-star"></li>
                            <li class="fa fa-star"></li>
                            <li class="fa fa-star"></li>
                            <li class="fa fa-star"></li>
                        </ul>
                        <div class="product-content">
                        <h3 class="title"><a class="btn3 warning" id="myBtn" href="#popup">Men's Plain Tshirt</a></h3>
                            <div class="price">$5.00
                                <span>$10.00</span>
                            </div>
                            <a class="add-to-cart" href="">+ Add To Cart</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 col-sm-6">
                    <div class="product-grid">
                        <div class="product-image">
                            <a href="#">
                                <img class="pic-1" src={im6}/>
                                <img class="pic-2" src={im6}/>
                            </a>
                            <ul class="social">
                                <li><a href="" data-tip="Quick View"><i class="fa fa-search"></i></a></li>
                                <li><a href="" data-tip="Add to Wishlist"><i class="fa fa-shopping-bag"></i></a></li>
                                <li><a href="" data-tip="Add to Cart"><i class="fa fa-shopping-cart"></i></a></li>
                            </ul>
                            <span class="product-new-label">Sale</span>
                            <span class="product-discount-label">50%</span>
                        </div>
                        <ul class="rating">
                            <li class="fa fa-star"></li>
                            <li class="fa fa-star"></li>
                            <li class="fa fa-star"></li>
                            <li class="fa fa-star"></li>
                            <li class="fa fa-star"></li>
                        </ul>
                        <div class="product-content">
                        <h3 class="title"><a class="btn3 warning" id="myBtn" href="#popup">Men's Plain Tshirt</a></h3>
                            <div class="price">$5.00
                                <span>$10.00</span>
                            </div>
                            <a class="add-to-cart" href="">+ Add To Cart</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 col-sm-6">
                    <div class="product-grid">
                        <div class="product-image">
                            <a href="#">
                                <img class="pic-1" src={im6}/>
                                <img class="pic-2" src={im6}/>
                            </a>
                            <ul class="social">
                                <li><a href="" data-tip="Quick View"><i class="fa fa-search"></i></a></li>
                                <li><a href="" data-tip="Add to Wishlist"><i class="fa fa-shopping-bag"></i></a></li>
                                <li><a href="" data-tip="Add to Cart"><i class="fa fa-shopping-cart"></i></a></li>
                            </ul>
                            <span class="product-new-label">Sale</span>
                            <span class="product-discount-label">50%</span>
                        </div>
                        <ul class="rating">
                            <li class="fa fa-star"></li>
                            <li class="fa fa-star"></li>
                            <li class="fa fa-star"></li>
                            <li class="fa fa-star"></li>
                            <li class="fa fa-star"></li>
                        </ul>
                        <div class="product-content">
                        <h3 class="title"><a class="btn3 warning" id="myBtn" href="#popup">Men's Plain Tshirt</a></h3>
                            <div class="price">$5.00
                                <span>$10.00</span>
                            </div>
                            <a class="add-to-cart" href="">+ Add To Cart</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
<div className="line2"></div> 
        </>

    )
}
export default Shop;