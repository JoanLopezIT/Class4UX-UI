function Card(props) {
    const { name, image, description, id } = props.product;


    function handleCard() {
        
        props.updateCart(props.product)
    }


    return (
        <>
            <img src={image} />
            <p>{name}</p>
            <p>Description: {description}</p>

            <button onClick={() => handleCard()}>Add Cart</button>
        </>

            
       

    )
}

export default Card;