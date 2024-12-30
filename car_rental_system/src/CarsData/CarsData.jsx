import React, { useState } from "react";
import './carsData.css'
import Cards from "./Cards";

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

  const [filteredCars, setFilteredCars] = useState(cars);

  const filterCars = (type) => {
    if (type === "All") {
      setFilteredCars(cars);
    } else {
      const filtered = cars.filter((car) => car.type === type);
      setFilteredCars(filtered);
    }
  };
  

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
    
      <div style={{ marginBottom: "20px" }}>
        <div className="Button" style={{display: "flex", justifyContent: "space-evenly"}}>
        <button onClick={() => filterCars("EV")} className="buttonStyle">
           EV Cars
        </button>
        <button onClick={() => filterCars("Petrol")} className="buttonStyle">
           Petrol Cars
        </button>
        <button onClick={() => filterCars("Diesel")} className="buttonStyle">
           Diesel Cars
        </button>
        {/* <button onClick={() => filterCars("All")} style={buttonStyle}>
          Show All Cars
        </button> */}
        <button  onClick={()=>filterCars("All")} className="buttonStyle"> All Cars  </button>
      </div>
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "6em" }}>
        {filteredCars.map((car, index) => (
          <div>
            <Cards image={car.image} Brand={car.brand}  model= {car.model} price={car.price} range={car.range} engine= {car.engine}/>
          </div>
        ))}
      </div>
    </div>
  );
};

// const 

// const cardStyle = {
//   border: "1px solid #ddd",
//   borderRadius: "8px",
//   padding: "15px",
//   width: "200px",
//   height:"auto",
//   textAlign: "center",
//   boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
// };

// const imageStyle = {
//   width: "100%",
//   height: "40vh",
//   borderRadius: "8px",
// };

export default CarData;
