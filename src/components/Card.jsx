function Card(props) {
    const { name, image, description, id, price } = props.product;


    return (
        <>
            <img src={image} />
            <p>{name}</p>
            <p>{`${price} $`}</p>
        </>

            
       

    )
}

export default Card;