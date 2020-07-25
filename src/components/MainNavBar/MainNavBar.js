import React, { Component } from 'react';
import './MainNavBar.css'
class MainNavBar extends Component{
    
    render(){ 
        const {onRouteChange}=this.props
    return(
        <div className='mainNav'>
            <div>
                <h2 className='w-75 p-3'>Main Navigation</h2>
                <div>
                    <p className='d' onClick={()=>onRouteChange('home')} >Dashboard</p></div>
            </div>
            <br></br>
            <div className="dropdown">
                <button className="dropbtn">Area Management</button>
                <div className="dropdown-content">
                    <ul className='mainli'>
                        <li
                        onClick={()=>onRouteChange('ViewModArea')}
                        >View & Modify Areas</li>
                        <li
                         onClick={()=>onRouteChange('AddNewArea')}
                         >Add New Areas</li>
                        <li
                         onClick={()=>onRouteChange('AreaListPrint')}
                        >Print Area Tags</li>
                    </ul>
                </div>
                </div>
        <br></br>
        <div>
        <div className="dropdown">
                <button className="dropbtn ">Disinfection Spray</button>
                <div className="dropdown-content">
                
                </div>
                </div>
        </div>
        
        <div className="dropdown">
                <button className="dropbtn">Content Management</button>
                <div className="dropdown-content">
                <ul className='mainli'>
                        <li
                        onClick={()=>onRouteChange('ListContentSnippet')}
                        >List all Content Snippet</li>
                        </ul>
                </div>
                </div>
        <br></br>
        <div className="dropdown">
                <button className="dropbtn">User Management</button>
                <div className="dropdown-content">
                <ul className='mainli'>
                        <li
                        onClick={()=>onRouteChange('UserList')}
                        >List Users</li>
                        <li
                        onClick={()=>onRouteChange('AddUser')}
                        >Add New User</li>
                        </ul>
                  
                </div>
                </div>
        </div>
    )
    }
}
export default MainNavBar;