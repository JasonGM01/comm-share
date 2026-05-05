import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from "./home.js";
import Categories from "./categories/categories.js";
import Request from "./request.js";
import Offer from "./offer.js";
import Login from "./login.js";
import Profile from "./profile.js"
import Profile from "./profile.js";

import HomeServices from "./categories/home-services.js";
import Education from "./categories/education.js";
import Technology from "./categories/technology.js";
import Errands from "./categories/errands.js"
import Vehicle from './categories/vehicle.js';

function Pathing({user, setUser}){
    return (
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/categories" element={<Categories />} />
            <Route path="/request" element={<Request />} />
            <Route path="/offer" element={<Offer />} />
            <Route path="/login" element={<Login />} />
        </Routes>
    );
}

export default Pathing;