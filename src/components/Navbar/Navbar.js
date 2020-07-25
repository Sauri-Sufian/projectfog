import React from 'react'
import TopNavBar from '../TopNavBar/TopNavBar'
const Navbar =({onRouteChange,isSignedIn})=>{
    const onBtnClick=()=>{
        onRouteChange('signin')
    }

        if(isSignedIn){ 
            return( 
        <TopNavBar onRouteChange={onRouteChange} />
            )}
        else{
            return ( 
            <div className='float' >
                <button
                 onClick={onBtnClick}
                 className='btn' >Signin/</button>
                <button
                onClick={onRouteChange}
                className='btn'>Register</button>
            </div>
            )
        }
    
}

export default Navbar;