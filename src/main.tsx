import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './components/Home';
import Experience from './components/Experience/Experience';
import Navbar from './components/Navbar/Navbar';
import Projects from './components/Projects/Projects';
import { initGA, logPageView } from '../ga4.ts';
import './styles.css';

const App: React.FC = () => {
    React.useEffect(() => {
        initGA();
        logPageView();
    }, []);

    return (
        <>
            <Navbar/>
            <div className="content">
                <div id="home" className="section">
                    <Home/>
                </div>
                <div id="experience" className="section">
                    <Experience/>
                </div>
                <div id="projects" className="section">
                     <Projects />
                </div>
            </div>
            <footer className="footer-like">
                &copy; 2024 Tomer Fikler. All Rights Reserved.
            </footer>
        </>
    );
}

ReactDOM.createRoot(document.getElementById('app')!).render(<App/>);
