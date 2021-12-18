import React, { Component } from "react";
import {Routes, Route} from 'react-router-dom';

//ROUTES
import Home from './Components/Home';

class AllRoutes extends Component {
    render() {
        return(
            <div>
                <Routes>
                    <Route path='/' element={<Home/>} />
                </Routes>
            </div>
        )
    }
}

export default AllRoutes;