import { useContext } from "react"
import ProductDetailsContext from "../Context/ProductDetailsContext"
import "./ProductCardForCart.css"

export default function ProductCardForCart({product}) {
    const {removeFromCart, increaseQuantity, decreaseQuantity} = useContext(ProductDetailsContext);

    return (
        <div className="cart-product-wrapper">
            <img src={product.productImage} alt={product.title} />
            <h2>{product.productName}</h2>
            <h3>₹ {product.productPrice}</h3>
            <button onClick={()=>{decreaseQuantity(product.id)}}>-</button>
            <span>{product.quantity}</span>
            <button onClick={()=>{increaseQuantity(product.id)}}>+</button>
            <div>
                <button onClick={()=>removeFromCart(product.id)}>Remove Item</button>
            </div>
        </div>
    )
}