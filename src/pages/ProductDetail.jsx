import { useParams, Link } from 'react-router-dom'
import productJson from "../data.json";
import "./ProductDetail.css"


function ProductDetail(props) {
    console.log(props);
    const { id } = useParams();

    const product = productJson.find((product) => product.id === parseInt(id));

    function handleCard() {
        
        props.updateCart(product)
    }

    return (
        <div className='card-detail'>
            <img src={product.image} />
            <div className='desc'>
                <p>{product.name}</p>
                <p>Description: {product.description}</p>
                <p><b>{product.price} $</b></p>
                <div className="btn-group">
                    <button onClick={() => handleCard()}>Add Cart</button>
                    <Link to={`/cart`}><button onClick={() => handleCard()}>Buy</button></Link>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail;