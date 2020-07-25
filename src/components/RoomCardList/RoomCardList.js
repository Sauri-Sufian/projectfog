import React from 'react';
import RoomCard from '../RoomCard/RoomCard'
import {cardsinfo} from './cardsinfo';
import './RoomCardList.css'
//console.log(cardsinfo)
const RoomCardList =()=>{
    return( 
        <div >
            { 
            cardsinfo.map((info,index)=>{ 
        return(
        <div className="roomInfo" >
            <RoomCard key={index}
            id={cardsinfo[index].id}
            state={cardsinfo[index].NeedsCleaning}
            atmosph={cardsinfo[index].Atmosph}
            surface={cardsinfo[index].Surface}
            
            
            />
        </div>
    )
        })
    }
    </div>
    )
}
export default RoomCardList;