import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import Home from "./components/Home/Home";
import PrivacyPolicy from "./components/PrivacyPolicy/PrivacyPolicy";
import UserDPPolicy from "./components/UserDPPolicy/UserDPPolicy";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <App>
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route path='/privacy-policy' element={<PrivacyPolicy />} />
                <Route path='/user-data-processing-policy' element={<UserDPPolicy />} />
            </Routes>
        </App>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
