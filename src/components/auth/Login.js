import React,{useState,useContext} from 'react';
import {useHistory} from 'react-router-dom';
import styles from '../../styles/auth.module.css';
import Axios from 'axios';
import {UserContext} from '../../context/UserProvider';
import ErrorNotice from '../misc/ErrorNotice'
import {BACKEND_URL as url} from '../../pathVariables'
export default function Login() {
    const [email,setEmail]=useState();
    const [password,setPassword]=useState();
    const {setUserData}=useContext(UserContext);
    const[error,setError]=useState();    
   
    
    const login= async (e)=>{
        e.preventDefault();
        try {
            
            const loginUser={email,password}
            const loginRes = await Axios.post(`${url}/users/login`,loginUser)
            setUserData({
                token:loginRes.data.token,
                user:loginRes.data.user
            })
            localStorage.setItem("auth-token",loginRes.data.token)
            if(!loginRes.data.user.adminUser) history.push("/mainLogged");
            if(loginRes.data.user.adminUser) history.push("/mainAdmin");
            createEntry();        
        } catch (err) {
            err.response.data.msg && setError(err.response.data.msg)
        }
    
    }
    const createEntry=()=>{

    }

    const history = useHistory();
    const register=()=>{
        history.push("/reg");
    }
    return (
        <div className={styles.container} >
            <h3 className="text-center">Login Access</h3>
            <hr  />
            <div className={styles.form}>

            
            <form onSubmit={login} >
                <div className="form-group">
                    <label >Email address</label>
                    <input type="email" className="form-control"  placeholder="Enter email"
                    onChange={(e)=>setEmail(e.target.value)}
                    />
                    <small  className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label >Password</label>
                    <input type="password" className="form-control" placeholder="Password"
                    onChange={(e)=>setPassword(e.target.value)}
                    />
                </div>
                <div className="form-check">
                    
                </div>
                <button type="submit" className="btn btn-primary btn-block">Access</button>
                
            </form>
            <button className="btn btn-dark mt-2 btn-block" onClick={register} >You don't have an account?</button>
            {
                error &&(
                    <ErrorNotice message={error} clearError={()=>setError(undefined)}/>
                )
            }
            </div>
        </div>


    )
}

