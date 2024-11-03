import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
// import Projects from './components/Projects';
// import Skills from './components/Skills';
// import Contact from './components/Contact';
import Navbar from './components/Navbar/Navbar';
import Experience from './components/Experience/Experience';
import './styles.css'; // Global styles

const App: React.FC = () => (
    <Router>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/experience" element={<Experience />} />
            {/*<Route path="/projects" element={<Projects />} />*/}
            {/*<Route path="/skills" element={<Skills />} />*/}
            {/*<Route path="/contact" element={<Contact />} />*/}
        </Routes>
        <div className='footer-like'>
            &copy; 2024 Tomer Fikler. All Rights Reserved.
        </div>
    </Router>
);

ReactDOM.createRoot(document.getElementById('app')!).render(<App />);
