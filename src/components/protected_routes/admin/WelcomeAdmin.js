import React, { useEffect} from 'react';
import {useHistory} from 'react-router-dom'
import {isLogged} from '../../services/checkUser'
export default function WelcomeAdmin(props) {
    const history =useHistory()
    
       useEffect(() => {
        const service= async()=>{
            const data=await isLogged()
            console.log(data.user)
            if(!data.user){
                console.log("you are no log in")
                history.push("/login")
            }else{
                if(!data.user.adminUser){
                    history.push("/mainLogged")
                } 
            }
            
            
        }
        service()
    })
    return (
        <div>
            Hola
        </div>
    )
}
