import { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import ItemCard from "./ItemCard";
import style from "./Store.module.css";




const Store = ()=>{
    const[storeItems , cartItems, setCartItems] = useOutletContext();
    // const [error, setError] = useState(null);
    // const [loading, setLoading] = useState(true);

    // const storeApiUrl = "https://fakestoreapi.com/products";
    // useEffect(()=>{
    //     fetch(storeApiUrl, { mode: "cors" })
    //     .then((response)=>{
    //         if (response.status >= 400) {
    //             throw new Error("server error");
    //           }
    //           return response.json();
    //     })
    //     .then((data)=>{
    //         console.log(data);
    //         setStoreItems(data)
    //     })
    //     .catch((error)=>setError(error))
    //     .finally(()=>setLoading(false));
    // },[]);

    // if(loading) return <p>Loading...</p>;

    // if(error) return <p>A network error was encountered</p>;


    return (
        <div className={style.ItemCardContainer}>
            {storeItems.map((item)=>(
                <ItemCard 
                    key={item.id}
                    item = {item}
                    cartItems = {cartItems}
                    setCartItems = {(newArray)=>setCartItems(newArray)}
                />    
            ))}
        </div>
    )
}

export default Store;