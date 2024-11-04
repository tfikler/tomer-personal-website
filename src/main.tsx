import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './components/Home';
import Experience from './components/Experience/Experience';
import Navbar from './components/Navbar/Navbar';
import './styles.css'; // Global styles

const App: React.FC = () => (
    <>
        <Navbar/>
        <div className="content">
            <div id="home" className="section">
                <Home/>
            </div>
            <div id="experience" className="section">
                <Experience/>
            </div>
        </div>
        <footer className="footer-like">
            &copy; 2024 Tomer Fikler. All Rights Reserved.
        </footer>
    </>
);

ReactDOM.createRoot(document.getElementById('app')!).render(<App/>);
