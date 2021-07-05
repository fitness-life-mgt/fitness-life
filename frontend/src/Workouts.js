import React from 'react';
import im2 from "./components/image/im2.jpg";
import im3 from "./components/image/im3.jpg";
import im4 from "./components/image/im4.jpg";
import im5 from "./components/image/im5.jpg";
import im6 from "./components/image/im6.jpg";

const Workouts = () => {
    return (
       
       <>
        <div className="workout-wrapper">   </div>
     
        <div className="card1-wrapper">
        <div class="container">
        <div className="line2">
            <h>LET US SHARE OUR KNOWLEDGE</h>
            </div>             
            <div class="row">
                <div class="col col-lg-4">
                    <div class="responsive">
                        <div class="gallery">
                            <a target="_blank" href={im6}>
                            <img src={im6} alt="Cinque Terre" width="300px" height="400"/>
                            </a>
                            <div class="desc">
                        <button class="button2 " type="button">Sports Wears</button>
                        </div>
                        </div>
                        </div>
                </div>
                <div class="col col-lg-4">  
                <div class="responsive">
                    <div class="gallery">
                        <a target="_blank" href={im5}>
                        <img src={im5} alt="Cinque Terre" width="300px" height="400"/>
                        </a>
                        <div class="desc">
                        <button class="button2 " type="button">Suppliments</button>
                        </div>
                    </div>
                </div>
              </div>
              <div class="col col-lg-2">
                    <div class="responsive">
                        <div class="gallery">
                            <a target="_blank" href={im2}>
                            <img src={im4} alt="Cinque Terre" width="300px" height="10"/>
                            </a>
                            <div class="desc">
                                <button class="button2 " type="button">Accessories</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>                         
    </div>
    </>
    )
}

export default Workouts;
