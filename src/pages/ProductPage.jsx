import { useState } from "react";
import { Link } from "react-router-dom";
import productJson from "./../data.json";


function ProductPage() {
    const [products, setProducts] = useState(productJson);
  
    return (
      <div>
        <h1>Projects</h1>
        {products.map((product) => {
          return (
            <div key={product._id} className="project">
              <Link to={`/products/${product._id}`}> <h3>{product.name}</h3></Link>
            </div>
          );
        })}
      </div>
    );
}

export default ProductPage;
