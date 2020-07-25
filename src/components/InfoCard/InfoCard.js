import React, { Component } from 'react';
import './InfoCard.css'



class InfoCard extends Component{
  constructor(props){
    super(props)
    this.state={
      bgcolor:'',
      iconcolor:'',
    }
  }
  componentDidMount(){
  /*   console.log(this.props.bgcolor) */
    this.setState({bgcolor:this.props.bgcolor})
    this.setState({iconcolor:this.props.iconcolor})
    
  }
  render(){ 
  /*   console.log(this.state.bgcolor) */
    return (
      
        <div 
        style={{backgroundColor:this.state.bgcolor
        }}
         className='infoCardBody'>
           <div
           style={{
             backgroundColor:this.state.iconcolor
           }} className="infoCardicon">
              <div>icon</div>
           </div>
           <div className='infoCard'>
          <div className='Content' >Total Rooms</div> 
          <div className='Data' >7</div>
          </div>
        </div>
    )
    
}
}

export default InfoCard;