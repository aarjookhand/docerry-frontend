import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PrivateRoute from "../src/routes/PrivateRoute"
import PublicRoute from "../src/routes/PublicRoute"


import WelcomePage from './views/WelcomePage';
import AboutPage from './views/AboutPage';
import ContactPage from './views/ContactPage';
import SignUpPage from './views/SignUpPage';
import SignInPage from './views/SignInPage';
import HomePage from './views/HomePage';
import CreateErrorPage from './views/CreateErrorPage';
import DetailedErrorPage from './views/DetailedErrorPage';



function App() {
  return (
    <Router>
      <div className="App">
        <Routes>

            <Route element={<PublicRoute />}>
                <Route path="/" element={<WelcomePage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/signup" element={<SignUpPage />} />
                <Route path="/signin" element={<SignInPage />} />        
            </Route>

             <Route element={<PrivateRoute />}>
                <Route path="/home" element={<HomePage />} />
                <Route path="/create-issue" element={<CreateErrorPage />} />
                <Route path="/issue/:id" element={<DetailedErrorPage />} />
            </Route>

        </Routes>
      </div>
    </Router>
  );
}

export default App;
