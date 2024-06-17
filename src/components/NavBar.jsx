import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping ,  faSearch } from '@fortawesome/free-solid-svg-icons'
import style from  './NavBar.module.css';

const NavBar = ({storeItems , cartItems , searchValue ,setSearchValue , setFilteredStoreItems})=>{
    // const[searchValue , setSearchValue] = useState("");

    let totalQuantity = 0;
    cartItems.forEach((item)=>{
        totalQuantity += item.quantity;
    })


    const filterSearchResults = (keyword)=>{
        let newFilteredArray = [];
        const keywordLowerCase = keyword.toLowerCase();

        if(keywordLowerCase === ""){
            newFilteredArray = [...storeItems];
        }else{
            storeItems.forEach((item)=>{

                const itemTitleLowerCase = item.title.toLowerCase();
                const itemCategoryLowerCase = item.category.toLowerCase();
                const itemDescriptionLowerCase = item.description.toLowerCase();
                    
                if(itemTitleLowerCase.includes(keywordLowerCase) || itemCategoryLowerCase.includes(keywordLowerCase) || itemDescriptionLowerCase.includes(keywordLowerCase)){
                    newFilteredArray.push(item);
                }   
                
            });

        }
        
        console.log("SEARCH BAR FILTERED ARRAY");
        console.log(newFilteredArray);
        setFilteredStoreItems(newFilteredArray);
    }

    
    return(
     
        <div className={style.navBar}>
            
            <div className={style.navBarLeft}>  
                <h1>ThriftHaven.</h1>
                <Link to="/"> <p className={style.homeLink}>Home</p> </Link>
                <Link to="store"><p>Store</p></Link>
            </div>

            
                
                  
            <div className={style.navBarRightAndSearchBar}>
                <div className={style.searchBarContainer}>
                    <FontAwesomeIcon icon={faSearch} size="lg" pull="left"/>
                        <div className={style.searchBar}>
                            <input type="text" 
                            value={searchValue} 
                            onChange={(e)=>{
                                setSearchValue(e.target.value)
                                filterSearchResults(searchValue);               
                                }} 
                            />    
                            
                        </div>         
                </div>

                <div className={style.navBarRight}>
                    <Link to="checkout"><FontAwesomeIcon icon={faCartShopping} size="lg" pull="left"/></Link>
                     <p>{totalQuantity}</p>
                </div>               
            </div>
        </div>
    )
}

export default NavBar ;