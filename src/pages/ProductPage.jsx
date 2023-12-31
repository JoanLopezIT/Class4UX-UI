import "./ProductPage.css"
import { useState } from "react";
import { Link } from "react-router-dom";
import productJson from "../data.json";
import Card from "../components/Card";

function ProductPage(props) {
    const [products, setProducts] = useState(productJson);
  
    return (
      <div className="allProducts">
        {products.map((product) => {
          return (
              <div className="product" key={product.id}>
                 <Link to={`/products/${product.id}`}> <Card product={product} /> </Link>
                </div>
          );
        })}
      </div>
    );
}

export default ProductPage;
