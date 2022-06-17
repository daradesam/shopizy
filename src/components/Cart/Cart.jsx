import { useContext } from "react"
import ProductDetailsContext from "../Context/ProductDetailsContext"
import ProductCardForCart from "../ProductCardForCart/ProductCardForCart";
import "./Cart.css"

export default function Cart() {
    const { cartProducts, totalPrice } = useContext(ProductDetailsContext);

    if (cartProducts.length === 0) {
        return <h2>Your cart is empty. Add items from available products</h2>
    }
    return (
        <div className="cart-wrapper">
            <h2>
                Products in your cart
            </h2>
            <div className="cart-products">
                {cartProducts.map((product)=>(
                    <ProductCardForCart product={product} key={product.id}/>
                ))}
            </div>
            <h2>Cart total: {totalPrice}</h2>
        </div>
    )
}