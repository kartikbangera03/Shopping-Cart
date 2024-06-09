import { useOutletContext } from "react-router-dom";
import CheckoutCard from "./CheckoutCard";
import style from "./Checkout.module.css";

const Checkout = ()=>{
    const[storeItems , cartItems, setCartItems] = useOutletContext();
    console.log("In checkout");
    let cartTotalAmount = 0;
    cartItems.forEach((item)=>{
        cartTotalAmount += item.quantity * item.price;
    })
    let vat = Math.round(0.2*cartTotalAmount*100)/100;


    console.log(cartTotalAmount);
    console.log(vat);
    const finalTotal = cartTotalAmount + vat;
    return (
        <div className={style.checkoutContainer}>
            <p>Shopping Bag</p>
            <div className={style.cartAndOrderSummary}>
                <div className={style.cart}>
                    {cartItems.map((item)=>(
                        <CheckoutCard
                            item={item}
                            cartItems = {cartItems}
                            setCartItems={(newArray)=>setCartItems(newArray)}
                        />
                    ))}
                </div>
                <div className={style.orderSummary}></div>
                    <p>Order Summary</p>
                    <h3>{finalTotal}</h3>
                    <div className={style.subtotal}>
                        <p>Subtotal {cartItems.length} items</p>
                        <p>{cartTotalAmount}</p>
                    </div>
                    <div className={style.subtotal}>
                        <p>Vat (20%)</p>
                        <p>{vat}</p>
                    </div>
                    <div className={style.subtotal}>
                        <p>Total</p>
                        <p>{finalTotal}</p>
                    </div>
                    <button>Checkout</button>

            </div>
        </div>
    )
}

export default Checkout;