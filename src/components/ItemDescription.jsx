import { useLocation, useOutletContext } from "react-router-dom";
import style from "./ItemDescription.module.css";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping , faStar} from '@fortawesome/free-solid-svg-icons'

const ItemDescription = (props)=>{
    const[storeItems , cartItems, setCartItems, filteredStoreItems , setFilteredStoreItems] = useOutletContext();
    const [itemQuantity ,setItemQuantity] = useState(1);
    const location = useLocation();
    console.log("ITEM DESCRIPTION :")
    const item = location.state;
    console.log(item);
    
    const ratingString = "  " + item.rating.rate + +  "  (" + item.rating.count +")  ";
 
    const isInCart = (itemId)=>{
        let itemIndex = -1;
        cartItems.forEach((item)=>{    
            if(item.id === itemId){
                itemIndex = cartItems.indexOf(item);
            }
        })
        return itemIndex;
    }
    
    return (
        <div className={style.itemDescriptionContainer}>
             <div className={style.itemDescriptionCard}>
                <div className={style.itemImage}>
                    <img src={item.image} alt="" />
                </div>

                <div className={style.itemInformation}>
                
                    <h2>{item.title}</h2>
                    <p> Category : {item.category}</p>
                    <p>{item.description}</p>
                    <div className={style.ratingContainer}>
                        <p>Rating : </p>
                        <div className={style.rating}>
                            <p>{item.rating.rate}</p>
                            <p><FontAwesomeIcon icon={faStar} size="lg" /> </p>
                            <p> ({item.rating.count})</p>
                        </div>     
                    </div>
                

                    <div className={style.quantityAndCartButtons}>
                        <div className={style.quantityCounterContainer}>
                            <button onClick={()=>{ 
                                if(itemQuantity!==1) setItemQuantity(itemQuantity-1);
                            }}><b>-</b></button>
                            <p>{itemQuantity}</p>
                            <button onClick={()=>{ 
                                if(itemQuantity!==20) setItemQuantity(itemQuantity+1);
                            }}><b>+</b></button>
                        </div>

                        <button className={style.addCartButton} onClick={()=>{
                        console.log("Cart Items before additions");
                        console.log(cartItems);
                        const itemIndex = isInCart(item.id);
                        if( itemIndex === -1){
                            const itemWithQuantity = {...item,quantity:itemQuantity};
                            console.log(itemWithQuantity);
                            const newCartItems = [...cartItems];
                            newCartItems.push(itemWithQuantity);
                            // console.log(newCartItems);
                            setCartItems(newCartItems);
                        }else{
                            const itemWithAddedQuantity = {...item,quantity:itemQuantity + cartItems[itemIndex].quantity};
                            console.log(itemWithAddedQuantity);
                            let newCartItems = [...cartItems];
                            newCartItems[itemIndex] = itemWithAddedQuantity;
                            setCartItems(newCartItems);
                        }
                         }}><FontAwesomeIcon icon={faCartShopping} size="lg" /> Add to Cart</button>       


                    </div>
                </div>
            </div>
        </div>  
    )
}

export default ItemDescription