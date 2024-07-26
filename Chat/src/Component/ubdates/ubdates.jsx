
import React from "react"
import { UpdatesData } from "../../../data/data"
import "../ubdates/ubdates.css"
function Ubdates(){
    return (
        <div className="Updates">
            <h2>Updates</h2>
            {UpdatesData.map((value)=>{
                return (
                    <div className="profile">
                        <img src={value.img}/>
                        <div className="desc">
                            <div style={{color : value.color , fontWeight : 600}}>{value.name}</div>
                            <div>{value.noti}</div>
                            <div>{value.time}</div>
                        </div>
                    </div>
            )
            })}
        </div>
    )
}
export default Ubdates