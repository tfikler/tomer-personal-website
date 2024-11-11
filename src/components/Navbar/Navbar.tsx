import React, {useState} from 'react';
import './Navbar.css';
import ContactForm from "../ContactForm/ContactForm.tsx"; // Import CSS specific to Navbar


//api
// import { getFileFromAzureContainer } from "../../../server/api/azure/azure-storage.ts";

const Navbar: React.FC = () => {
    const [iconImageUrl, setIconImageUrl] = React.useState<string>('');
    const [isContactOpen, setContactOpen] = useState(false);
    const openContactForm = () => setContactOpen(true);
    const closeContactForm = () => setContactOpen(false);

    React.useEffect(() => {
        const fetchIcon = async () => {
            try {
                const response = await fetch('api/generate-sas-url');
                if (!response.ok) {
                    throw new Error('Failed to fetch icon');
                }
                const data = await response.json();
                console.log(data);
                setIconImageUrl(data.sasUrl);
            } catch (error) {
                console.error('Error fetching icon:', error);
            }
        };
        fetchIcon();
    }, []);
    return (
        <nav className="navbar">
            <div className="logo">
                <img className="logo-img" src={iconImageUrl} alt={''}/>
                <span className="logo-text">Tomer Fikler</span>
            </div>
            <ul className="nav-links">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#contact-me" onClick={openContactForm}>Contact me</a></li>
            </ul>
            <ContactForm isOpen={isContactOpen} onClose={closeContactForm} />
        </nav>
    );
};

export default Navbar;
