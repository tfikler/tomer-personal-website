import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
// import Projects from './components/Projects';
// import Skills from './components/Skills';
// import Contact from './components/Contact';
import './styles.css';

const App: React.FC = () => (
    <Router>
        <Routes>
            <Route path="/" element={<Home />} />
{/*<Route path="/projects" element={<Projects />} />*/}
{/*<Route path="/skills" element={<Skills />} />*/}
{/*<Route path="/contact" element={<Contact />} />*/}
        </Routes>
    </Router>
);

ReactDOM.createRoot(document.getElementById('app')!).render(<App />);
