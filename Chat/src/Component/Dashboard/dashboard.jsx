import { cardsData } from "../../../data/data.js"
import "./dashboard.css"
import Cart from "../cart/cart.jsx"
function Dashboard(){
    return(
        <div className="dashboard">
            <h2>Dashboard</h2>
            <div className="Carts">
                {cardsData.map((value , index)=>{
                    return <Cart key={index}  Value = {value} index = {index} />        
                })}
            </div>
        </div>
    )
}
export default Dashboard