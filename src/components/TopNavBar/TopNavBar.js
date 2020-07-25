import React, { Component } from 'react';
import icon from './user.png'
import './TopNavBar.css'
class TopNavBar extends Component{

render(){
    const {onRouteChange}=this.props
    return(
        
        <div className="dropdown">
                <button className="dropbtn">
                    <img alt='usericon' src={icon}></img>
                </button>
                <div className="dropdown-content">
                    <ul>
                        <li >
                            <div className='userProfile'>
                               
                            </div>
                        </li>
                        <li >
                            <p> username : demo</p>
                            <p>accountapme :demo</p>
                        </li>
                        <li >
                            <button
                            onClick= {()=>onRouteChange('ChangePassword')}
                            >Change password</button>
                            <button
                            onClick={()=>onRouteChange('welcome')}
                            >Logout</button>
                        </li>
                    </ul>
                </div>
                </div>
    )
}
}
export default TopNavBar;