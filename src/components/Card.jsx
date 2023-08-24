import ProductPage from "../pages/ProductPage";

function Card(props) {
    const { name, image, description, id } = props.product;



    return (
        <div className="card">
            <img src={image} />
            <p>{name}</p>
            <p>Description: {description}</p>
            <button onClick={() => (id)}>Add Cart</button>
        </div>
    )
}

export default Card;