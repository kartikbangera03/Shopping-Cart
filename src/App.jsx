import NavBar from './components/NavBar';
import { Outlet } from 'react-router-dom';
import {useState , useEffect} from "react";

function App() {
  const[cartItems, setCartItems] = useState([]);
  const[storeItems , setStoreItems] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const[searchValue , setSearchValue] = useState("");
  const [filteredStoreItems , setFilteredStoreItems] = useState([]);

  const storeApiUrl = "https://fakestoreapi.com/products";
  useEffect(()=>{
      fetch(storeApiUrl, { mode: "cors" })
      .then((response)=>{
          if (response.status >= 400) {
              throw new Error("server error");
            }
            return response.json();
      })
      .then((data)=>{
          console.log(data);
          setStoreItems(data)
          setFilteredStoreItems(data);
      })
      .catch((error)=>setError(error))
      .finally(()=>setLoading(false));
  },[]);

  if(loading) return <p>Loading...</p>;

  if(error) return <p>A network error was encountered</p>;



  return (
    <>
    <NavBar 
      storeItems = {storeItems}
      cartItems = {cartItems}
      searchValue={searchValue}
      setSearchValue={(newValue)=> setSearchValue(newValue)}
      setFilteredStoreItems={(newFilteredArray)=>setFilteredStoreItems(newFilteredArray)}
    
    ></NavBar>
    <Outlet context={[storeItems , cartItems, setCartItems, filteredStoreItems , setFilteredStoreItems]}/>
    </>
  )
}

export default App
