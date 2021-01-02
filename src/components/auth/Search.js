import React,{useContext,useEffect} from 'react';
import { withRouter } from 'react-router-dom'
import {useHistory} from 'react-router-dom';
import UserContext from '../../context/UserContext';
import {isLogged} from '../services/checkUser'
export default function Search(props) {
    const history=useHistory();
    const userData= useContext(UserContext)
    console.log(userData)
    useEffect(() => {
        if(userData.user) history.push('/')
    }, [])
    
    return (
        <div>
            Estoy buscando
        </div>
    )
}
