import React, { Component } from 'react';
import './RoomCard.css'



let needsClean;
class RoomCard extends Component{
  
     clean=(state)=>{
        if(state){
             needsClean='Needs Clean';
        }
        else{
            needsClean="Cleaned";
        }
        return needsClean;
     }
   
    render() { 
        const {id,state,atmosph,surface,onBtnClick}=this.props
        
  
       /* const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);  */
    return(
        <div  className='RoomCardBody'>
           <div className="RoomCardid">
            <div>{id}</div>
              <div>{this.clean(state)}</div>
           </div>
           <div className='RoomCardState'>
    <div className='Content' >Atmosph {atmosph}</div> 
          <div className='Data' >Surface {surface}</div>
          </div>
          <div className='moreinfo'>
          <button
          className='btnExp'
          >more info</button>
  
        
          </div>
        </div>
    )
        
       
    }
}

export default RoomCard;