import React from 'react';
import "./Cart.css";
import im6 from './components/image/im6.jpg';

import { useState } from "react";
import { useEffect } from "react";
import Axios from "axios";

const Cart = () => {

    const [info, setInfo] = useState([]);
    const [totinfo, settotInfo] = useState([]);    
    const [totshipinfo, settotshipInfo] = useState([]);
   
    
    

    //get order details
    const getInfo =()=>{
        Axios.get("http://localhost:8001/cart/ordersview").then((response)=>{
            setInfo(response.data);
            //console.log(response.data);
           
        });
    };
    useEffect(() => {
        getInfo();
      }, []);


    //get total price
    const gettotInfo =()=>{
        Axios.get("http://localhost:8001/cart/totprice").then((response)=>{
            settotInfo(response.data);
            //console.log(response.data);
           
        });
    };
    useEffect(() => {
        gettotInfo();
      }, []);  
    
   

    return (
        <>
        <div className="line2"></div> 
        <div class="container mb-4">
    <div class="row">
        <div class="col-12">
            <div class="table-responsive">
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col"> </th>
                            <th scope="col">Product</th>
                            <th scope="col">Available</th>
                            <th scope="col">Quantity</th>
                            <th scope="col" class="text-right">Price</th>
                            <th> </th>
                        </tr>
                    </thead>
                    <tbody>
                        
                    {info.map((val, key) => {
                    return (
                        <tr>
                            <td><img className="im1" src= {val.imageUrl} /> </td>
                            <td>{val.productName}</td>
                            <td>In stock</td>
                            <td><input class="form-control" type="text" value="1" /></td>
                            <td class="text-right">Rs {val.price}.00 /=</td>
                            <td class="text-right"><button class="btn btn-sm btn-danger"><i class="fa fa-trash"></i> </button> </td>
                        </tr>
                                      );
                                    })}  

                        {totinfo.map((val, key) => {
                        return (      
                                                   
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>Sub-Total</td>
                            <td class="text-right">Rs {val.total}.00 /= </td>
                        </tr>
                         );
                        })} 
                  {totinfo.map((val, key) => {
                        return (      
                                    
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><strong>Total</strong></td>
                         
                            <td class="text-right"><strong>Rs {val.total}.00 /= </strong></td>
                         
                        </tr>
                           );
                        })} 
                    </tbody>
                </table>
            </div>
        </div>
        <div class="col mb-2">
            <div class="row">
                <div class="col-sm-12  col-md-6">
                <a class="button1" role="button" href="/SportsWears">Continue Shopping</a>                   
                </div>
                <div class="col-sm-12 col-md-6 text-right">
                <a class="button152" role="button" href="/SportsWears">Pay Here!</a>    
                </div>
            </div>
        </div>
    </div>
</div>
</>
    )
}

export default Cart
