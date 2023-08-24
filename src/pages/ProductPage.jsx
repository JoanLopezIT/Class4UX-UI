import { useState } from "react";
import { Link } from "react-router-dom";
import productJson from "../data.json";
import Card from "../components/Card";

function ProductPage() {
    const [products, setProducts] = useState(productJson);
  
    return (
      <>
        <h1>Projects</h1>
        {products.map((product) => {
          return (
            <div key={product.id} className="project">
              <Link to={`/products/${product.id}`}> <div> <Card product={product} /> </div></Link>
            </div>
          );
        })}
      </>
    );
}

export default ProductPage;
