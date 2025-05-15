import { FaShoppingCart, FaStar } from "react-icons/fa"
import { products } from "../products"
import { useContext } from "react"
import { CartContext } from "../Providers/CartProvider"
import { Link } from "react-router"

const ProductListing = () => {

    const { addToCart } = useContext(CartContext)

    return <div className="container-fluid">
        <Link to="/cart">CART</Link>
        <div className="row g-1">
            {
                products.map(product => {
                    return <div key={product.id} className="col-12 bg-light col-sm-6 col-md-4 col-xl-3 col-xxl-2 text-center">
                        <div>
                            <img src={product.thumbnail} alt={product.title} />
                        </div>
                        <h4 className="text-truncate">{product.title}</h4>
                        <div className="d-flex justify-content-between">
                            <div className="d-flex align-items-center gap-1"><FaStar /> {product.rating}</div>
                            <div>${product.price}</div>
                        </div>
                        <button onClick={() => addToCart(product)} className="w-100 btn btn-success"><FaShoppingCart />Add To Cart</button>
                    </div>
                })
            }
        </div>
    </div>
}

export default ProductListing