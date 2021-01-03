import React, { useEffect} from 'react';
import {useHistory} from 'react-router-dom'
import {isLogged} from '../../services/checkUser'

const Welcome=()=> {
    const history =useHistory()
    
       useEffect(() => {
        const service= async()=>{
            const data=await isLogged()
            console.log(data.user)
            if(!data.user){
                console.log("you are no log in")
                history.push("/login")
            }            
        }
        service()
    })
    
    return (
        <div>
           Welcome subdito
        </div>
    )
}
export default Welcome
