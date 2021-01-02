import React,{useState,useEffect} from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Navbar from './components/layout/Navbar';
import UserContext from './context/UserContext';
import Welcome from './components/logged/Welcome';
import WelcomeAdmin from './components/admin/WelcomeAdmin';
import Search from './components/auth/Search';
import {isLogged} from './components/services/checkUser'

export default function App() {
    
    const[userData,setUserData]=useState({
        token:undefined,
        user:undefined
    });
    useEffect(()=>{
        const checkIsLogged =isLogged
        console.log(checkIsLogged())
    },[]);
    return (
        <>
        <BrowserRouter>

        <UserContext.Provider value={{userData,setUserData}}>
        <Navbar/>
        <div className="container">
            <Switch>
                <Route exact path="/search" component={Search}></Route>
                <Route exact path="/" component={Home}></Route>
                <Route  exact path="/login" component={Login}></Route>
                <Route  exact path="/reg" component={Register}></Route>
                <Route exact path="/mainLogged" component={Welcome}></Route>
                <Route  exact path="/mainAdmin" component={WelcomeAdmin}></Route>

            </Switch>
        </div>
        
        </UserContext.Provider>       
        
        </BrowserRouter>
        </>
    )
}
