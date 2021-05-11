import React from 'react'
import Login  from '../pages/Login'
import AdminIndex  from '../pages/AdminIndex'
import { BrowserRouter as Router, Route } from 'react-router-dom'


const Routers = () => {
    return (
        <div>
            <Router>
                <Route path='/login/' exact   component = {Login}/>
                <Route path='/index/'   exact component = {AdminIndex}/>
            </Router>
        </div>
    )
}

export default Routers