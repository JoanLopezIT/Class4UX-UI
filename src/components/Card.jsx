function Card(props) {
    const { name, image, description, id } = props.product;


    return (
        <>
            <img src={image} />
            <p>{name}</p>
            <p>Description: {description}</p>
        </>

            
       

    )
}

export default Card;