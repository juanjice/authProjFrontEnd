import React from "react";
import {render} from "react-dom";
import App from "./App.js";
/*import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import rootReducer from './redux/reducers'*/
import UserProvider from './context/UserProvider';

render(
   <UserProvider>
<App /> 
   </UserProvider>
        
    
        
    
,document.getElementById('root')
)
