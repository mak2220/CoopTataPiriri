import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../components/home/home';

const ReactRouter = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route index element={<Home />} />
                </Routes>
            </Router>
        </>
    )
}

export default ReactRouter;