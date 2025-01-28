import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import DestinationPage from './DestinationPage';
import TajMahalVRPage from './TajMahalVRPage';
import ThanjavurTempleVR from './ThanjavurTempleVR';

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/destination" element={<DestinationPage />} />
        <Route path="/" element={<LoginPage />} />
        <Route path="/tajmahal-vr" element={<TajMahalVRPage />} />
        <Route path="/thanjavur-temple-vr" element={<ThanjavurTempleVR />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
