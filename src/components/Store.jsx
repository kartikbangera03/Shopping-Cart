import { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import ItemCard from "./ItemCard";
import style from "./Store.module.css";
import { Link } from "react-router-dom";



const Store = ()=>{
    const[storeItems , cartItems, setCartItems, filteredStoreItems , setFilteredStoreItems] = useOutletContext();

    
    let storeItemCategories = ["All"];
    storeItems.forEach((item)=>{
        let s =  item.category;
            s = s.charAt(0).toUpperCase() + s.slice(1);
        if(!storeItemCategories.includes(s))
        {   
            storeItemCategories.push(s)
        }
        
    })

    

    const filterByCategory = (category)=>{
        let filteredArray = [];
        const categoryLowerCase = category.toLowerCase();
        if(categoryLowerCase === "all"){
            filteredArray = [...storeItems];
        }else{
            storeItems.forEach((item)=>{
                if(item.category === categoryLowerCase){
                    filteredArray.push(item);
                }
            });
        }
        
        setFilteredStoreItems(filteredArray);
    }

    const SideBarElement = ({category})=>{
        return (
            <div className={style.sideBarElement}>
                <p onClick={()=>{
                    console.log(category);
                    filterByCategory(category);
                }}>{category}</p>

            </div>
        )
    }

    console.log(storeItemCategories);

    return (
        <div className={style.storeContainer}>
            <div className={style.sideBar}>
                {
                    storeItemCategories.map((category)=>(
                        <SideBarElement
                            category={category}
                        />
                    ))

                }
            </div>


            <div className={style.ItemCardContainer}>

                {filteredStoreItems.length > 0 &&
                    filteredStoreItems.map((item)=>(
            
                        <ItemCard 
                            key={item.id}
                            item = {item}
                            cartItems = {cartItems}
                            setCartItems = {(newArray)=>setCartItems(newArray)}
                        />    
                    ))
                }
                
                {
                    filteredStoreItems.length===0 &&
                    <p>No Items found</p>
                }
            </div>

        </div>
        
    )
}

export default Store;