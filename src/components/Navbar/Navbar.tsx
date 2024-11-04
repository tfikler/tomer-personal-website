import React from 'react';
import './Navbar.css'; // Import CSS specific to Navbar


//api
// import { getFileFromAzureContainer } from "../../../server/api/azure/azure-storage.ts";

const Navbar: React.FC = () => {
    const [iconImageUrl, setIconImageUrl] = React.useState<string>('');

    React.useEffect(() => {
        const fetchIcon = async () => {
            try {
                const response = await fetch('http://localhost:3000/generate-sas-url');
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
    return (
        <nav className="navbar">
            <div className="logo">
                <img className="logo-img" src={iconImageUrl} alt={''}/>
                <span className="logo-text">Tomer Fikler</span>
            </div>
            <ul className="nav-links">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#experience">Experience</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
