import { Link } from "react-router-dom";
import style from  './NavBar.module.css';

const NavBar = ({cartItems})=>{

    let totalQuantity = 0;
    cartItems.forEach((item)=>{
        totalQuantity += item.quantity;
    })
    return(
     
        <div className={style.navBar}>
            <div className={style.navBarLeft}>  
                <Link to="/">Home</Link>
                <Link to="store">Store</Link>
            </div>

            <div>
                <Link to="checkout">Checkout</Link>
                <p>{totalQuantity}</p>
            </div>
        </div>
    )
}

export default NavBar ;