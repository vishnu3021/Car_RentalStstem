import React from "react";
import { Link, useParams } from "react-router-dom";
const CarData = () => {
    const cars = [
        { type: "EV", brand: "Tesla", model: "Model 3", range: "358 miles", price: "₹1,600 per hour", image: "https://st.automobilemag.com/uploads/sites/11/2017/01/Unplugged-Performance-2016-Tesla-Model-X-90D.jpg" },
        { type: "EV", brand: "Nissan", model: "Leaf", range: "212 miles", price: "₹1,200 per hour", image: "https://techcentral.co.za/wp-content/uploads/2019/01/new-nissan-leaf-2156-1120.jpg" },
        { type: "EV", brand: "Hyundai", model: "Kona Electric", range: "258 miles", price: "₹1,400 per hour", image: "https://s.yimg.com/uu/api/res/1.2/KYZCQr4UwXcIGKdkbLbboQ--~B/aD04MjE7dz0xMzQ0O2FwcGlkPXl0YWNoeW9u/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2022-06/7e0539b0-f7ac-11ec-b1dd-b5d9be7acc28.cf.jpg" },
        { type: "Petrol", brand: "Toyota", model: "Corolla", engine: "1.8L", price: "₹800 per hour", image: "https://i.pinimg.com/originals/5c/3f/8d/5c3f8dfc6e397775855c478a712d3827.jpg" },
        { type: "Petrol", brand: "Honda", model: "Civic", engine: "2.0L", price: "₹900 per hour", image: "https://www.hdwallpapers.in/download/honda_civic_type_r_sport_line_4k_5k_hd_cars-2560x1440.jpg" },
        { type: "Diesel", brand: "BMW", model: "3 Series", engine: "2.0L", price: "₹2,000 per hour", image: "https://www.topgear.com/sites/default/files/2022/09/1-BMW-3-Series.jpg" },
        { type: "Diesel", brand: "Mercedes-Benz", model: "C-Class", engine: "2.1L", price: "₹2,200 per hour", image: "https://th.bing.com/th/id/OIP.44jE2Ds_DQPb4hjuiGQS-wHaEK?rs=1&pid=ImgDetMain" },
      ];
      const {id}= useParams() 
  return(
    <div>
        {cars.map((a,b)=>{
            return(
                <div key={b}>
                    <h1>Brand:{a.brand}</h1>
                    <img src={a.image} alt="" />
                    <h2>Model:{a.model}</h2>
                    <h3>Price{a.price}</h3>
                    <p>Type:{a.type}</p>
                    </div>
            )
        })}
    </div>
  )
};


export default CarData;
