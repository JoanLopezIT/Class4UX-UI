import { useParams, Link } from 'react-router-dom'
import productJson from "../data.json";
import {useState} from "react"



function ProductDetail() {
    const { id } = useParams();
    const [cart, setCart] = useState([]);

    const product = productJson.find((product) => product.id === parseInt(id));

    const addToCard = (id)=>{
    
            const newItem = { id };
            console.log(newItem)
            setCart(prevCart => [...prevCart, newItem]);
    }

    return (
        <div className='card-detail'>
            <img src={product.image} />
            <p>{product.name}</p>
            <p>Description: {product.description}</p>
            <button onClick={addToCard}>Add Cart</button>
           <Link to={`/cart`}><button onClick={addToCard(product.id)}>Buy</button></Link>
        </div>
    )
}

export default ProductDetail;