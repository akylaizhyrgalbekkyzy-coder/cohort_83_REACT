import { useState } from "react";
import "./Homework_05.css"

function Homework_05() {
    const [cars] = useState([ 
        { brand: "BMW", 
        price: 20000, 
        isDiesel: true }, 
        { brand: "Mercedes", 
        price: 22000,
        isDiesel: false }, 
        { brand: "Porsche", 
        price: 50000, 
        isDiesel: true }, 
        { brand: "Nissan",
        price: 25000, 
        isDiesel: false }, 
        { brand: "Audi", 
        price: 50000, 
        isDiesel: true }, 
        { brand:"Tesla", 
        price: 60000, 
        isDiesel: false},
    ]);

    return (
        <div className="list_of_cars">Total cars: {cars.length}
        <div className="cars_block" > {cars.map((car,index) => (
            <div key = {index} className = "cars_card">
                <h3>{car.brand}</h3> 
                <p>{car.price}</p>
                <p>{car.isDiesel ? "Diesel" : "Gas"}</p>
                </div>
        ))}
        </div>
    </div>
    );
}




export default Homework_05;