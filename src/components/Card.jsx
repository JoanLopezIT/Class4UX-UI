import ProductPage from "../pages/ProductPage";

function Card(props) {
    const { name, image, description, id } = props.product;
    return (
        <>
            <img src={image} />
            <p>{name}</p>
            <p>Description: {description}</p>
            <button onClick={() => (id)}>Add Cart</button>
        </>
    )
}

export default Card;