import { useOutletContext } from "react-router-dom";
import CheckoutCard from "./CheckoutCard";
import style from "./Checkout.module.css";

const Checkout = ()=>{
    const[storeItems , cartItems, setCartItems, filteredStoreItems , setFilteredStoreItems] = useOutletContext();
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
            
            <div className={style.cartAndOrderSummary}>
                
                <div className={style.cart}>
                    <p className={style.title}>Shopping Bag</p>
                        {cartItems.map((item)=>(
                            <CheckoutCard
                                item={item}
                                cartItems = {cartItems}
                                setCartItems={(newArray)=>setCartItems(newArray)}
                            />
                        ))}
                </div>
                
                <div className={style.orderSummary}>
                    <h3>Order Summary</h3>
                        <h2>$ {Math.round(finalTotal*100)/100}</h2>
                        <div className={style.subtotal}>
                            <p>Subtotal {cartItems.length} items</p>
                            <p>$ {Math.round(cartTotalAmount*100)/100}</p>
                        </div>
                        <div className={style.subtotal}>
                            <p>Vat (20%)</p>
                            <p>$ {Math.round(vat*100)/100}</p>
                        </div>
                        <div className={style.total}>
                            <p>Total</p>
                            <p>$ {Math.round(finalTotal*100)/100}</p>
                        </div>
                        <button className={style.checkoutButton}>Checkout</button>


                </div>
                    

            </div>
        </div>
    )
}

export default Checkout;