import React, {useState,useEffect,createContext} from 'react'
import {isLogged} from '../components/services/checkUser'

export const UserContext= createContext(null);

const UserProvider =(props)=>{

    const[userData,setUserData]=useState({
        token:undefined,
        user:undefined
    });
    useEffect(() => {
        console.log("hola soy app.js use context")
            const service= async()=>{
                const result= await isLogged()
                setUserData(result)
                         
            }
            service()
    }, [])
    return (
        <UserContext.Provider value={{userData,setUserData}}>
            {props.children}
        </UserContext.Provider>
    )

}

export default UserProvider

