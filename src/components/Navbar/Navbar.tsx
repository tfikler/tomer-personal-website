import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import CSS specific to Navbar

const Navbar: React.FC = () => {
    return (
        <nav className="navbar">
            <div className="logo">Tomer Fikler</div>
            <ul className="nav-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/skills">Skills</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
