import { Link } from "react-router-dom"
import './Header.css'
function Header({cart}){
    return(
        <>
            <div className="navbar">
                <div className="logo">
                    <h2>Store</h2>
                </div>
                <ul>
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/cart'}><span>{cart.length}</span>Cart</Link></li>
                </ul>
            </div>
            
        </>
    )
}
export default Header