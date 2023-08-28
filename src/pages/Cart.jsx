import "./Cart.css";

function Cart(prop) {
    const arrayMobile = prop.cart;

    const totalPrice = arrayMobile.reduce((total, item) => total + item.price, 0);

    return (
        <div className="cartTotal">
            <div className="productsTotal">
            {arrayMobile.map((data) => (
                <div className="productCart">
                    <img src={data.image} alt={data.name} />
                    <div key={data.id} className="productInfo">
                        <p>{data.name}</p>
                        <p>{data.description}</p>
                        <p>{data.price}$</p>
                    </div>
                </div>
            ))}
            </div>
            <div className="productResume">
                {arrayMobile.map((data) => (
                <div className="">
                    <div key={data.id} className="productInfo resume">
                        <p><b>{data.name}</b> </p>
                        <p>{data.price}$</p>
                    </div>
                </div>
                ))}
                <p className="b-t"><b>Total</b></p>
                <p className="b-t">{totalPrice.toFixed(2)}$</p>
            </div>
        </div>
    );
}

export default Cart;