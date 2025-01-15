import { useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";
import "./Bottles.css";


const Bottles = () => {
    const [bottles, setBottles] = useState([])
    const [cart, setCart] = useState(0)
    const [cartCollection, setCartCollection] = useState([])
    

    useEffect(() => {
        fetch('bottle.json')
            .then(response => response.json())
            .then(data => setBottles(data))




    }, [])



    const handleCart = (cartBottle) => {
        setCart(cart + 1)
        setCartCollection([...cartCollection, cartBottle])
        console.log(cartCollection);
        

    }

    return (
        <div >
            <h1>Cart:{cart}</h1>
            <ul>
                {
                    cartCollection.map(cartItem => <li>{cartItem.name }</li>)  
                }

            </ul>
            <div className="bottles-container">
                {
                    bottles.map(bottle => <Bottle handleCart={handleCart} bottle={bottle} key={bottle.id}></Bottle>)


                }

            </div>


        </div>
    );
};

export default Bottles;