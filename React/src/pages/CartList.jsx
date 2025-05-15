import { useContext } from "react"
import { CartContext } from "../Providers/CartProvider"
import { FaTrash } from "react-icons/fa"
import { Link } from "react-router"

const CartList = () => {

    const { cartList, removeFromCart } = useContext(CartContext)

    return <div className="container-fluid">
        <Link to="/products">PRODUCTS</Link>
        <div className="row g-1">
            {
                cartList.map(product => {
                    return <div key={product.id} className="col-12 bg-light col-sm-6 col-md-4 col-xl-3 col-xxl-2 text-center">
                        <div>
                            <img src={product.thumbnail} alt={product.title} />
                        </div>
                        <h4 className="text-truncate">{product.title}</h4>
                        <button onClick={() => removeFromCart(product.id)} className="w-100 btn btn-danger"><FaTrash /> Remove</button>
                    </div>
                })
            }
        </div>
    </div>
}

export default CartList