import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from "./home.js";
import Categories from "./categories/categories.js";
import Request from "./request.js";
import Offer from "./offer.js";
import Login from "./login.js";
import Profile from "./profile.js";

import HomeServices from "./categories/home-services.js";
import Education from "./categories/education.js";
import Technology from "./categories/technology.js";
import Errands from "./categories/errands.js"
import Vehicle from './categories/vehicle.js';

function Pathing(){
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="categories" element={<Categories />} />
            <Route path="categories/home-services" element={<HomeServices />} />
            <Route path="categories/education" element={<Education />} />
            <Route path="categories/technology" element={<Technology />} />
            <Route path="categories/errands" element={<Errands />} />
            <Route path="categories/vehicle" element={<Vehicle />} />
            <Route path="request" element={<Request />} />
            <Route path="offer" element={<Offer />} />
            <Route path="login" element={<Login />} />
            <Route path="profile" element={<Profile />} />
        </Routes>
    );
}

export default Pathing;