import React from 'react';


import {Switch,Route, BrowserRouter} from 'react-router-dom';

import Home from './components/pages/Home';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Navbar from './components/layout/Navbar';
import Welcome from './components/protected_routes/logged/Welcome';
import WelcomeAdmin from './components/protected_routes/admin/WelcomeAdmin';
import Confirmation from './components/auth/Confirmation';







export default function App() {
    
    return (
              
        
        <React.Fragment>  
            
            
            <BrowserRouter>
            
                <Navbar />       
        {
            
        <div className="container">
            <Switch>                
                <Route exact path="/confirm" component={Confirmation}></Route>
                <Route exact path="/" component={Home}></Route>
                <Route   path="/login" component={Login}></Route>
                <Route   path="/reg" component={Register}></Route>
                <Route  path="/mainLogged" component={Welcome}></Route>
                <Route   path="/mainAdmin" component={WelcomeAdmin}></Route>

            </Switch>
        </div>      
        }    
          
        </BrowserRouter>
        
        </React.Fragment>
    );
}
