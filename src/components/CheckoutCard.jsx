import style from "./CheckoutCard.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'

const CheckoutCard = ({item , cartItems, setCartItems})=>{
    console.log("Checkout item");
    console.log(item);

    return (
        <div className={style.CheckoutCard}>
            <img src={item.image} alt="" />
            <div className={style.itemInformation} >
                <div className={style.titleAndDeleteButton}>
                    <h3>{item.title}</h3>
                    
                           
                <div className={style.quantityAndDeleteButton}>
                    <div className={style.quantityCounterContainer}>
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
                    <button className={style.deleteButton} onClick={()=>{
                            const itemIndex = cartItems.indexOf(item);
                            let newCartItems = [...cartItems];
                            newCartItems.splice(itemIndex,1);
                            setCartItems(newCartItems);
                            }}><FontAwesomeIcon icon={faTrashCan} size="lg" /></button>

                    </div> 
                    
                </div>
                

            </div>
            
            <p className={style.itemTotal}>${Math.round(item.price * item.quantity*100)/100}</p>
        </div>
    )
}

export default CheckoutCard;