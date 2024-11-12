import React, {useState} from 'react';
import './Navbar.css';
import ContactForm from "../ContactForm/ContactForm.tsx"; // Import CSS specific to Navbar


//api
// import { getFileFromAzureContainer } from "../../../server/api/azure/azure-storage.ts";

const Navbar: React.FC = () => {
    const [iconImageUrl, setIconImageUrl] = React.useState<string>('');
    const [isContactOpen, setContactOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false); // State for toggling menu visibility

    const openContactForm = () => setContactOpen(true);
    const closeContactForm = () => setContactOpen(false);
    const vercelUrl = import.meta.env.VITE_VERCEL_URL;
    //const localUrl = 'http://localhost:3000';

    React.useEffect(() => {
        const fetchIcon = async () => {
            try {
                const response = await fetch(`${vercelUrl}/api/generate-sas-url.ts`);
                if (!response.ok) {
                    throw new Error('Failed to fetch icon');
                }
                const data = await response.json();
                setIconImageUrl(data.sasUrl);
            } catch (error) {
                console.error('Error fetching icon:', error);
            }
        };
        fetchIcon();
    }, []);

    const toggleMenu = () => setMenuOpen(!menuOpen); // Toggle menu visibility
    return (
        <nav className="navbar">
            <div className="logo">
                <img className="logo-img" src={iconImageUrl} alt={''}/>
                <span className="logo-text">Tomer Fikler</span>
            </div>
            {/* Hamburger Icon for Mobile */}

            <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
                <li><a href="#home">Home</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#contact-me" onClick={openContactForm}>Contact me</a></li>
            </ul>

            <div className="hamburger" onClick={toggleMenu}>
                &#9776;
            </div>

            <ContactForm isOpen={isContactOpen} onClose={closeContactForm}/>
        </nav>
    );
};

export default Navbar;
