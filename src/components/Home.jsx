import { Link } from "react-router-dom";
import style from "./Home.module.css"

const Home = ()=>{
    return(
     <div className={style.homePageContainer}>
        <div className={style.homePage}>
            <h2>Welcome to ThriftHaven.</h2> 
            <h3>Your Ultimate Thrift Store Destination!</h3>
            <p>At ThriftHaven, we believe in the beauty of giving pre-loved items a second chance to shine. Step into a world where every item tells a story, and every purchase makes a difference. Our thrift store is more than just a shopping destination; it's a treasure trove waiting to be explored.</p>

            

            
            <Link to={"store"}><button>Shop Now</button></Link>
        
        </div>

     </div>
        
    )
}

export default Home ;