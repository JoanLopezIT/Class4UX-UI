function Cart(prop) {

    const arrayMobile = prop.cart;

    return(
        
            arrayMobile.map((data) => {
                return (
                    <div>
                        <p>{data.id}</p> 
                        <p>{data.name}</p>
                        <p>{data.description}</p>
                    </div>
                )
            })
        
    )
}

export default Cart;