import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Main from "./routes/Main/Main";
import Blog from "./routes/Blog/Blog";
import ChristmasCard from "./routes/ChristmasCard/ChristmasCard";

import "./App.css";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/christmas-card" element={<ChristmasCard />} />
            </Routes>
        </Router>
    );
};

export default App;