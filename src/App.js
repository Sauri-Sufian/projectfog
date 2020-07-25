import React, { Component } from 'react';
import MainNavBar from './components/MainNavBar/MainNavBar'
import TopNavBar from './components/TopNavBar/TopNavBar'
import InfoCard from './components/InfoCard/InfoCard'
import RoomCardList from './components/RoomCardList/RoomCardList'
import Signin from './components/Signin/Signin'
import Welcome from './components/Welcome/Welcome'
import Register from './components/Register/Register'
import ViewModAera from './components/ViewModArea/ViewModArea';
import AddNewArea from './components/AddNewArea/AddNewArea'
import AreaListPrint from'./components/AreaListPrint/AreaListPrint'
import ChangePassword from './components/ChangePassword/ChangePassword';
import logo from './components/TopNavBar/im8Logo.png'
import ListContentSnippet from './components/ListContentSnippet/ListContentSnippet';
import UserList from './components/UserList/UserList';
import AddUser from'./components/AddUser/AddUser'

import './App.css';
import DisplayTable from './components/DisplayTable/DisplayTable';




class App extends Component {
  constructor(){
    super()
    this.state={
        route:'welcome',
        isSignedIn:'false',
        popup:'false',
    }
  }
  onRouteChange=(route)=>{
   
    this.setState({route:route});
    /* console.log(this.state.route) */
  }
  onBtnClick=()=>{
    console.log('clickedd')
    this.setState({popup:"true"});
    
   }
  render(){ 
    /* console.log(this.state.route) */
    
    if(this.state.route ==='welcome'){
      return(
       <Welcome onRouteChange={this.onRouteChange}/>
      )
    }
      else  if(this.state.route ==='home'){ 
       
      return ( 
    <div key='idkey'className='app'>
       <div >
                    <img className='logo'alt='im8logo' src={logo} ></img>
                </div>
    <div className='top' >
      <TopNavBar
       
      onRouteChange={this.onRouteChange}/>
    </div>
    <div className='nav'>
    <div>
      <MainNavBar  onRouteChange={this.onRouteChange} />
    </div>
    </div>
    
    <div className='rest'>
    
    <div className='content'>
      
    <div className='info'>
    <h1 className='head' >Dashboard</h1> 
      <InfoCard bgcolor={'#05C4F3'} iconcolor={'#0CA4C9'}/>
      <InfoCard bgcolor={'#F3A323'}iconcolor={'#C5913F'}/>
      <InfoCard bgcolor={'#00AF5E'}iconcolor={'#009B54'}/>
      <InfoCard bgcolor={'#E53C79'}iconcolor={'#AF1C52'}/>
      
    </div>
    <div className='room' >
      
      <RoomCardList />
     
      </div>
      <div>
        <DisplayTable/>
      </div>
    </div>
    </div>
    </div>
    )
      }
    else if( this.state.route === 'Signin'){ 
        return( 
        <Signin  onRouteChange={this.onRouteChange}/>
       
        )
         
        }
      else if(this.state.route ==='Register'){
          return(
           <Register onRouteChange={this.onRouteChange}/>
          )
        }
        else if( this.state.route ==='ViewModArea' ){
          return(
            <div>
               <div>
            <img alt='im8logo' src={logo}></img>
            </div>
            <div className='top'>
            <TopNavBar onRouteChange={this.onRouteChange}/>
            </div>
            <div className='mainNav'>
        <MainNavBar onRouteChange={this.onRouteChange}/>
       
        </div>
        <div className='view'>
            <ViewModAera/>
            </div>
            </div>
          )
        }
        else if( this.state.route ==='AddNewArea' ){
          return(
            <div>
              <div className='main'>
            <div>
            <img  alt='im8logo' src={logo}></img>
            </div>
            <div className='top'>
             <TopNavBar onRouteChange={this.onRouteChange} /> 
            </div>
            <div className='mainNav'>
         <MainNavBar onRouteChange={this.onRouteChange} /> 
        </div>
            <AddNewArea/>
            </div>
            </div>
          )
          
        }
        else if(this.state.route === 'AreaListPrint'){
          return( 
          <div>
              <div className='main'>
            <div>
            <img alt='im8logo' src={logo}></img>
            </div>
            <div className='top'>
             <TopNavBar onRouteChange={this.onRouteChange} /> 
            </div>
            <div className='mainNav'>
         <MainNavBar onRouteChange={this.onRouteChange} /> 
        </div>
            <AreaListPrint/>
            </div>
            </div>
          )
        }
        else if(this.state.route === 'ChangePassword'){
          return( 
          <div>
              <div className='main'>
            <div>
            <img alt='im8logo' src={logo}></img>
            </div>
            <div className='top'>
             <TopNavBar onRouteChange={this.onRouteChange} /> 
            </div>
            <div className='mainNav'>
         <MainNavBar onRouteChange={this.onRouteChange} /> 
        </div>
            <ChangePassword  onRouteChange={this.onRouteChange}/>
            </div>
            </div>
          )
        }
        else if(this.state.route === 'ListContentSnippet'){
          return( 
          <div>
              <div className='main'>
            <div>
            <img alt='im8logo' src={logo}></img>
            </div>
            <div className='top'>
             <TopNavBar onRouteChange={this.onRouteChange} /> 
            </div>
            <div className='mainNav'>
         <MainNavBar onRouteChange={this.onRouteChange} /> 
        </div>
            <ListContentSnippet/>
            </div>
            </div>
          )
        }
        else if(this.state.route === 'UserList'){
          return( 
          <div>
              <div className='main'>
            <div>
            <img alt='im8logo' src={logo}></img>
            </div>
            <div className='top'>
             <TopNavBar onRouteChange={this.onRouteChange} /> 
            </div>
            <div className='mainNav'>
         <MainNavBar onRouteChange={this.onRouteChange} /> 
        </div>
            <UserList/>
            </div>
            </div>
          )
        }
        else if(this.state.route === 'AddUser'){
          return( 
          <div>
              <div className='main'>
            <div>
            <img alt='im8logo' src={logo}></img>
            </div>
            <div className='top'>
             <TopNavBar onRouteChange={this.onRouteChange} /> 
            </div>
            <div className='mainNav'>
         <MainNavBar onRouteChange={this.onRouteChange} /> 
        </div>
            <AddUser onRouteChange={this.onRouteChange}/>
            </div>
            </div>
          )
        }
        
     
    
  }
    
  

}
export default App;
