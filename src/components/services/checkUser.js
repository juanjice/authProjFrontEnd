import Axios from 'axios';
import {BACKEND_URL as url} from '../../pathVariables'

export const isLogged = async ()=>{

    const userData={
        token:undefined,
        user:undefined
    }

    let token=localStorage.getItem("auth-token");
    if(token===null){
        localStorage.setItem("auth-token","");
        token="";
    } 
    
    const tokenRes= await Axios.post(
        `${url}/users/tokenIsValid`,null,
        {headers:{"x-auth-token":token}}
    );
        
    if(tokenRes.data){
        const usersRes=await Axios.get(
            `${url}/users/`,
            {headers:{"x-auth-token":token}},
        );
        
        userData.token=token
        userData.user=usersRes.data
         
    } 
    
    return userData
           
}