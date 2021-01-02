import React, { useContext } from 'react';
import { Link, NavLink, useHistory } from 'react-router-dom';
import UserContext from '../../context/UserContext'


export default function Navbar() {
    const { userData, setUserData } = useContext(UserContext);
    const history = useHistory();
    
    const register = () => {
        history.push("/reg")
    }
    const login = () => {
        history.push("/login")
    }
    const logOut = () => {
        setUserData({
            token:undefined,
            user:undefined
        });
        localStorage.setItem("auth-token","");
        history.push("/login")
    }
    return (

        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <Link className="navbar-brand" to="/">Navbar</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse " id="navbarSupportedContent" >

                <ul className="navbar-nav ml-auto">
                    <li className="nav-item ">
                        <NavLink
                            className="btn btn-dark  mr-2"
                            to="/"
                            exact>
                            Home
                        </NavLink>
                    </li>

                    {
                        userData.user ? (
                        <>
                            <li className="nav-item">
                            <button className="btn btn-dark mr-2" onClick={logOut} >Log Out</button>
                            </li>
                        </>)
                             :(
                            <>
                            <li className="nav-item ">
                            <button className="btn btn-dark mr-2" onClick={login} >Log in</button>
                            </li>

                            <li className="nav-item ">
                            <button className="btn btn-dark mr-2" onClick={register}  >Register</button>
                            </li>
                           </> )

                    }
                    
                    
                </ul>
            </div>
        </nav>
    )
}

