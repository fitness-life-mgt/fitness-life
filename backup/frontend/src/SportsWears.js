import React from 'react';
import im6 from './components/image/im6.jpg';
import './shop.css';

import { useState } from "react";
import { useEffect } from "react";
import Axios from "axios";

export const SportsWears = () => {

    const [info, setInfo] = useState([]);

     const [productID, setproductID] = useState([]);
    // const [productName, setproductName] = useState([]);
    // const [price, setprice] = useState([]);
    // const [description, setdescription] = useState([]);
     const [imageUrl, setimageUrl] = useState([]);
    // const [category, setcategory] = useState([]);


       //get product information
    const getInfo =()=>{
        Axios.get("http://localhost:8001/membershop/sportswears").then((response)=>{
            setInfo(response.data);
            //console.log(response.data);
           
        });
    };
    useEffect(() => {
        getInfo();
      }, []);

      const addtocartproduct =(proId)=>{

        Axios.post("http://localhost:8001/membershop/addtocart",{            
            productID:proId,

        },{headers:{
             'Content-Type': 'application/json',
         }}).then((response) => {
             if(!response.data.error)		
            {
                alert("Added to the cart!.");   	
 
            }else{
                console.log("Error!");
            }
 
        }).catch(error=>{
            alert(error);
        })
 
     };  

    
   
   
    
    
    return (
        <>
        <div className="line2"></div> 
        <div class="btn-group">
        <a class="button3" role="button" href="/SportsWears">Sports Wears</a>
        <a class="button3" role="button" href="/Suppliments">Suppliments</a>
        <a class="button3" role="button" href="/Equipments">Equipments</a>
        </div>
                
        <div class="container">     

        <div className="line2"></div> 
            <div class="row">
            {info.map((val, key) => {
           return (
               <>
                <div class="col-md-3 col-sm-6">
                    <div class="product-grid">
                        <div class="product-image">
                            <a href="#">
                                <img class="pic-1" src={val.imageUrl}/>
                                <img class="pic-2" src={val.imageUrl}/>
                            </a>
                            <ul class="social">
                                <li><a href="" data-tip="Quick View"><i class="fa fa-search"></i></a></li>
                                <li><a href="" data-tip="Add to Wishlist"><i class="fa fa-shopping-bag"></i></a></li>
                                <li><a href="" data-tip="Add to Cart"><i class="fa fa-shopping-cart"></i></a></li>
                            </ul>
                            
                           
                        </div>
                        <ul class="rating">
                            <li class="fa fa-star"></li>
                            <li class="fa fa-star"></li>
                            <li class="fa fa-star"></li>
                            <li class="fa fa-star"></li>
                            <li class="fa fa-star disable"></li>
                        </ul>
                   
                                            <div class="product-content">                            
                                            <h3 class="title">
                                                <a class="btn3 warning" id="myBtn" href="#popup">{val.productName} </a></h3>
                                            <div class="price">Rs {val.price}.00 /=
                                                </div>
                                            <button class="button11" 
                                            onClick={()=>addtocartproduct(val.productID)}>+ Add To Cart</button>
                                        </div>                                                                  
                                                        
                   </div>
                </div>
                 <div class="popup" id="popup">
                 <div class="popup-inner">
                     <div class="popupphoto">
                         <img  class="pic-1" src={val.imageUrl}/>
                     </div>
                     <div class="popuptext">
                     <h1>{val.productName}</h1>
                     <p>{val.description}</p>
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
             </>
                );
            })}  
    </div>
   </div>
        </>

    )
}
export default SportsWears;