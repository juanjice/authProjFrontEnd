import React,{useState,useEffect} from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Axios from 'axios';
import Home from './components/pages/Home';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Navbar from './components/layout/Navbar';
import UserContext from './context/UserContext';
import Welcome from './components/logged/Welcome';
import WelcomeAdmin from './components/admin/WelcomeAdmin';
export default function App() {
    const[userData,setUserData]=useState({
        token:undefined,
        user:undefined
    });
    useEffect(()=>{
        const checkIsLogged =async ()=>{
            let token=localStorage.getItem("auth-token");
            if(token===null){
                localStorage.setItem("auth-token","");
                token="";
            } 
            
            const tokenRes= await Axios.post(
                "http://localhost:3000/users/tokenIsValid",null,
                {headers:{"x-auth-token":token}}
            );

                if(tokenRes.data){
                const usersRes=await Axios.get(
                    "http://localhost:3000/users/",
                    {headers:{"x-auth-token":token}},
                );
                setUserData({
                    token,
                    user:usersRes.data,
                });
            }            
        }
        checkIsLogged();
    },[]);
    return (
        <>
        <BrowserRouter>

        <UserContext.Provider value={{userData,setUserData}}>
        <Navbar></Navbar>
        <Switch>
            
            <Route exact path="/" component={Home}></Route>
            <Route path="/login" component={Login}></Route>
            <Route path="/reg" component={Register}></Route>
            <Route path="/mainLogged" component={Welcome}></Route>
            <Route path="/mainAdmin" component={WelcomeAdmin}></Route>

        </Switch>
        </UserContext.Provider>       
        
        </BrowserRouter>
        </>
    )
}
