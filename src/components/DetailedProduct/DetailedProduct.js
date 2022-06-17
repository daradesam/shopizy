import "./DetailedProduct.css";
import { useParams } from "react-router";
import { useContext } from "react";
import ProductDetailsContext from "../Context/ProductDetailsContext";
import {Link} from "react-router-dom";

export default function DetailedProduct({ products }) {
    const { id } = useParams();
    const {addToCart} = useContext(ProductDetailsContext);

    const singleProduct = products.filter((item) => {
        return item.id == id;
    })

    return (
        <>
            {singleProduct.map((product) => (
                <div className="product-details-wrapper" key={product.id}>
                    <div className="product-img">
                        <img src={product.image} alt={product.title} />
                    </div>
                    <div className="product-details">
                        <h1>{product.title}</h1>
                        <h2>₹ {product.price}</h2>
                        <Link to="/cart" onClick={()=>{addToCart(product.id)}}>Add to Cart</Link>
                        <p>{product.description}</p>
                    </div>
                </div>
            ))}
        </>
    )
}