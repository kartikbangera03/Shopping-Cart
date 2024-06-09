import style from "./ItemCard.module.css";
import { useState } from "react";

const ItemCard = ({item , cartItems ,setCartItems})=>{
    const [quantity,setQuantity] = useState(1);

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
        <div className={style.Card}>
            <div className={style.ImgContainer}>
                <img src={item.image} alt="" />
            </div>
            
            <h4>{item.title}</h4>
            <p>${item.price}</p>
            <div className={style.quantityCounter}>
                <button onClick={()=>{ 
                    if(quantity!==1)setQuantity(quantity-1);
                }}>-</button>
                <p>{quantity}</p>
                <button onClick={()=>{ 
                    if(quantity!==20)setQuantity(quantity+1);
                }}>+</button>
            </div>

            <button onClick={()=>{
                console.log("Cart Items before additions");
                console.log(cartItems);
                const itemIndex = isInCart(item.id);
                if( itemIndex === -1){
                    const itemWithQuantity = {...item,quantity:quantity};
                    console.log(itemWithQuantity);
                    const newCartItems = [...cartItems];
                    newCartItems.push(itemWithQuantity);
                    // console.log(newCartItems);
                    setCartItems(newCartItems);
                }else{
                    const itemWithAddedQuantity = {...item,quantity:quantity + cartItems[itemIndex].quantity};
                    console.log(itemWithAddedQuantity);
                    let newCartItems = [...cartItems];
                    newCartItems[itemIndex] = itemWithAddedQuantity;
                    setCartItems(newCartItems);
                }
            }}>Add to Cart</button>
        </div>
    )
}

export default ItemCard;