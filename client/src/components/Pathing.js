import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from "./home.js";
import Categories from "./categories.js";
import Request from "./request.js";
import Offer from "./offer.js";
import Login from "./login.js";
import Profile from "./profile.js";

function Pathing(){
    return (
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/categories" element={<Categories />} />
            <Route path="/request" element={<Request />} />
            <Route path="/offer" element={<Offer />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
        </Routes>
    );
}

export default Pathing;