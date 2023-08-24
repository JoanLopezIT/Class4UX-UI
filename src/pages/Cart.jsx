function Cart() {

    const arrayMobile=[
        {
            "id": 1,
            "name": "TechNova X1",
            "image": "https://example.com/technovax1.jpg",
            "description": "Experience the future with the cutting-edge TechNova X1 smartphone."
          },
          {
            "id": 2,
            "name": "PixelPro 12",
            "image": "https://example.com/pixelpro12.jpg",
            "description": "Capture life's moments in stunning detail with the PixelPro 12's advanced camera system."
          }
    ]

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