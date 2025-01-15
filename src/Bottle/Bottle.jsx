import './Bottle.css'

const Bottle = ({ bottle,handleCart }) => {
    const { name, price, ratings,seller,stock,img } = bottle;
    return (
        <div className="bottle">
            <img className='bottle-img' src={img} alt={name} />
            <div>
                <h2>Name:{ name}</h2>
                <p>Price:{ price}</p>
                <p>Ratings:{ ratings}</p>
                <p>Brand: { seller}</p>
                <p>Stock: { stock}</p>
            </div>

            <button onClick={()=>handleCart(bottle)} className='button'>Collect Now</button>
            
        </div>
    );
};

export default Bottle;