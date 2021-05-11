import React from 'react';
import ReactDOM from 'react-dom';
import Routers from './route/Routers';
import 'antd/dist/antd.css'
import store from './redux/store'
import {Provider} from 'react-redux'


// StrictMode 是一个用来检查项目中潜在问题的工具。
ReactDOM.render(
    <Provider store={store}>
        <Routers /> 
    </Provider>
 , document.getElementById('root'));
