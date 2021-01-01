import React,{useState,useContext} from 'react';
import {useHistory} from 'react-router-dom';
import styles from '../../styles/auth.module.css';
import Axios from 'axios';
import UserContext from '../../context/UserContext';
import ErrorNotice from '../misc/ErrorNotice'
export default function Register() {
    const[email,setEmail]=useState();
    const[passwordCheck,setpasswordCheck]=useState();
    const[password,setPassword]=useState();
    const[displayName,setDisplayName]=useState();
    const[error,setError]=useState();

    const {setUserData}=useContext(UserContext);

    const history = useHistory();
    const login=()=>{
        history.push("/login");
    }
    const submit = async (e)=>{
        e.preventDefault();
        try {
            
            const newUser={email,password,passwordCheck,displayName}
            
            const pruebaUser={email:"prueba2@gmail.com",password:"password",passwordCheck:"password",displayName:"apodox"}
            console.log(newUser,pruebaUser)
            const regRes=await Axios.post(
                "http://localhost:3000/users/register",
                newUser
                
            );
            console.log(regRes)
            const loginRes=await Axios.post(
                "http://localhost:3000/users/login",
                {email,password}
            );
            setUserData({
                token:loginRes.data.token,
                user:loginRes.data.user,
            });
            localStorage.setItem("auth-token",loginRes.data.token)
            history.push("/mainLogged")

        } catch (err) {
            err.response.data.msg && setError(err.response.data.msg)
        }
        
    }
    return (
        <div className={styles.container} >
            <h3 className="text-center">Registration menu</h3>
            <hr  />
            <div className={styles.form}>

            
            <form onSubmit={submit}>
                <div className="form-group">
                    <label >Email address</label>
                    <input type="email" className="form-control"  placeholder="Enter email" 
                    onChange={(e)=>setEmail(e.target.value)}
                    />
                    <small  className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label >Nickname</label>
                    <input type="text" className="form-control"   placeholder="Nickname"
                    onChange={(e)=>setDisplayName(e.target.value)}
                    />
                    
                </div>
                <div className="form-group">
                    <label >Password</label>
                    <input type="password" className="form-control" placeholder="Password"
                    onChange={(e)=>setPassword(e.target.value)}
                    />
                
                </div>
                <div className="form-group">

                    <label >Confirm Password</label>
                    <input type="password" className="form-control"  placeholder="Enter password again"
                    onChange={(e)=>setpasswordCheck(e.target.value)}
                    />
                
                </div>

                <button type="submit" className="btn btn-primary btn-block">Register!</button>
                
            </form>
            <button className="btn btn-dark mt-2 btn-block" onClick={login} >You already have an account?</button>
            {
                error &&(
                    <ErrorNotice message={error} clearError={()=>setError(undefined)}/>
                )
            }
            
            </div>
        </div>


    )
}