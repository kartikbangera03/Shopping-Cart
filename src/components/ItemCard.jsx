import { Link } from "react-router-dom";
import style from "./ItemCard.module.css";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

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

    const itemCopy = {...item , 
            quantity: quantity,
            // setQuantityFunction:(newQty)=> setQuantity(newQty)
        };
    

    console.log("ItemCopy : ");
    console.log(itemCopy);
    return (

     
            <div className={style.Card}>
                <Link to={`/store/${item.title}`} state={itemCopy}>
                    <div className={style.ImgContainer}>
                        <img src={item.image} alt="" />
                    </div>
                
                    <h4>{item.title}</h4>
                    <p>$ {item.price}</p>
                </Link>
                

                <div className={style.quantityAndCartButtons}>
                    <div className={style.quantityCounterContainer}>
                        <button onClick={()=>{ 
                            if(quantity!==1)setQuantity(quantity-1);
                        }}><b>-</b></button>
                        <p>{quantity}</p>
                        <button onClick={()=>{ 
                            if(quantity!==20)setQuantity(quantity+1);
                        }}><b>+</b></button>
                    </div>

                    <button className={style.addCartButton} onClick={()=>{
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
                }}><FontAwesomeIcon icon={faCartShopping} size="lg" /> Add to Cart</button>       


                </div>
                
                    
                
                
        </div>
        
    )
}

export default ItemCard;