import style from "./CheckoutCard.module.css";


const CheckoutCard = ({item , cartItems, setCartItems})=>{
    console.log("Checkout item");
    console.log(item);
    return (
        <div className={style.CheckoutCard}>
            <img src={item.image} alt="" />
            <div className={style.itemInformation} >
                <p>{item.title}</p>
                <p>{item.category}</p>
            </div>

            <div className={style.checkoutQuantity}>
                <button onClick={()=>{
                    if(item.quantity!==1){
                        const newItemQuantity = item.quantity-1;
                        const itemWithModifiedQuantity = {...item,quantity:newItemQuantity}
                        let index = cartItems.indexOf(item);
                        let newCartItems = [...cartItems];
                        newCartItems[index] = itemWithModifiedQuantity;
                        setCartItems(newCartItems);

                    }
                }}>-</button>
                <p>{item.quantity}</p>
                <button onClick={()=>{
                    if(item.quantity!==20){
                        const newItemQuantity = item.quantity+1;
                        const itemWithModifiedQuantity = {...item,quantity:newItemQuantity}
                        let index = cartItems.indexOf(item);
                        let newCartItems = [...cartItems];
                        newCartItems[index] = itemWithModifiedQuantity;
                        setCartItems(newCartItems);
                    }
                }}>+</button>
            </div>
            
            <button onClick={()=>{
                const itemIndex = cartItems.indexOf(item);
                let newCartItems = [...cartItems];
                newCartItems.splice(itemIndex,1);
                setCartItems(newCartItems);
            }}>Delete</button>
            <p>$ {item.price * item.quantity}</p>
        </div>
    )
}

export default CheckoutCard;