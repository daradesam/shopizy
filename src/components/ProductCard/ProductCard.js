import { Link } from "react-router-dom"
import "./ProductCard.css"

export default function ProductCard({ product }) {
    return (
        <div className="product-card-wrapper" key={product.id}>
            <Link to={`/${product.id}`}>
                <img src={product.image} alt={product.title} />
                <h2>{product.title}</h2>
            </Link>
            
            <h3>₹ {product.price}</h3>
        </div>
    )
}