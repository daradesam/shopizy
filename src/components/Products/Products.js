import { useContext } from "react"
import ProductDetailsContext from "../Context/ProductDetailsContext"
import ProductCard from "../ProductCard/ProductCard"
import "./Products.css"

export default function Products() {
    const {products} = useContext(ProductDetailsContext);

    return (
        <div>
            <h1>Shop your favourite products</h1>
            <div className="products-wrapper">
                {products.map((product) => {
                    return <ProductCard key={product.id} product={product} />
                })}
            </div>
        </div>
    )
}