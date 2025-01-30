import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PrivateRoute from "../src/routes/PrivateRoute"
import PublicRoute from "../src/routes/PublicRoute"

import WelcomePage from './views/WelcomePage';
import SignUpPage from './views/SignUpPage';
import SignInPage from './views/SignInPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
        <Route element={<PublicRoute />}>
            <Route path="/" element={<WelcomePage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/signin" element={<SignInPage />} />        
        </Route>


        </Routes>
      </div>
    </Router>
  );
}

export default App;
