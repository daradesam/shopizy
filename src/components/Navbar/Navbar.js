import "./Navbar.css"
import { Link } from "react-router-dom";
import { useContext } from "react";
import ProductDetailsContext from "../Context/ProductDetailsContext";

export default function Navbar() {
    const {quantity} = useContext(ProductDetailsContext);

    return (
        <div className="navbar">
            <Link to="/">
                <h2>SHOPIZY</h2>
            </Link>
            <Link to="/cart">
                <img src="cart.svg" alt="cart" />
                <div className="cart-count-wrapper">
                    <span>{quantity}</span>
                </div>
            </Link>
        </div>
    )
}