import React, { Component } from "react";
import {Routes, Route} from 'react-router-dom';

//ROUTES
import Home from './Components/Home';
import Contact from "./Components/Contact";
import Events from "./Components/Events";
import Food from "./Components/menus/Food";
import Beer from "./Components/menus/Beer";
import Cocktails from "./Components/menus/Cocktails";
import SpiritsWines from "./Components/menus/SpiritsWines";

class AllRoutes extends Component {
    render() {
        return(
            <>
                <Routes>
                    <Route path='/' element={<Home/>} />
                    <Route path='/events' element={<Events/>} />
                    <Route path='/contact' element={<Contact/>} />
                    <Route path='/food' element={<Food/>} />
                    <Route path='/beer' element={<Beer/>} />
                    <Route path='/cocktails' element={<Cocktails/>} />
                    <Route path='/spirits-wines' element={<SpiritsWines/>} />
                </Routes>
            </>
        )
    }
}

export default AllRoutes;