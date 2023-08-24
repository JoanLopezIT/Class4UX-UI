import { useParams, Link } from 'react-router-dom'
import productJson from "../data.json";

function ProductDetail() {
    const { id } = useParams();

    const product = productJson.find((product) => product.id === parseInt(id));

    return (
        <div className='card-detail'>
            <img src={product.image} />
            <p>{product.name}</p>
            <p>Description: {product.description}</p>
            <button onClick={() => (product.id)}>Add Cart</button>
           <Link to={`/cart`}><button onClick={() => (product.id)}>Buy</button></Link>
        </div>
    )
}

export default ProductDetail;