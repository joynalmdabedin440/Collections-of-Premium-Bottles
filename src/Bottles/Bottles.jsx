import { useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";
import "./Bottles.css";
import { addToLocalStorage, getStoreCart } from "../utilities/localStorage";


const Bottles = () => {
    const [bottles, setBottles] = useState([])
    const [cart, setCart] = useState(0)
    const [cartCollection, setCartCollection] = useState([])
    

    useEffect(() => {
        fetch('bottle.json')
            .then(response => response.json())
            .then(data => setBottles(data))


    }, [])

    useEffect(() => {
        
        if (bottles.length) {
            const savedCart=[]
            const storedItem = getStoreCart()
            storedItem.map(id => {
                const bottle = bottles.find(bottle => bottle.id === id)
                if (bottle) { 
                    savedCart.push(bottle)

                }

                
            })
            setCartCollection(savedCart)
            setCart(savedCart.length)
            
            
         }
        
    },[bottles])



    const handleCart = (cartBottle) => {
        setCart(cart + 1)
        setCartCollection([...cartCollection, cartBottle])
        
        addToLocalStorage(cartBottle.id)

    }

    return (
        <div >
            <h1>Cart:{cart}</h1>
            <ul className="cart">
                {
                    cartCollection.map(cartItem => <div className="cart-item" key={cartItem.id}> <li > {cartItem.name}</li>
                    <img className="cart-img" src={cartItem.img} alt="" />
                    </div>)  
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