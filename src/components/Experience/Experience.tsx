import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ExperienceSection = styled.section`
    padding: 10px 20px;
    background: #f2f2f2;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: Arial, sans-serif;
    margin-bottom: 8px;
`;

const Title = styled.h2`
    font-size: 3rem;
    margin-bottom: 50px;
    color: #333333;
    text-align: center;
`;

const ExperienceContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 30px;
    width: 120%;
    max-width: 800px;
`;

const ExperienceCard = styled(motion.div)<{ gradient: string; isFlipped: boolean }>`
    background: ${({ gradient }) => gradient};
    border-radius: 12px;
    padding: 5px 50px 50px 50px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #333333;
    cursor: pointer;
    perspective: 1000px;
    height: 200px;
    position: relative;
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
        transform: translateY(-8px);
        box-shadow: 0 16px 32px rgba(0, 0, 0, 0.2);
    }

    & .flip-card-inner {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        transform-style: preserve-3d;
        transition: transform 0.6s;
        transform: ${({ isFlipped }) => (isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)')};
    }

    & .flip-card-front,
    & .flip-card-back {
        position: absolute;
        width: 100%;
        height: 100%;
        backface-visibility: hidden;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 20px;
    }

    & .flip-card-back {
        transform: rotateY(180deg);
    }
`;

const Role = styled.h3`
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 10px;
`;

const Company = styled.h4`
    font-size: 1.2rem;
    color: #4d4d4d;
    margin-bottom: 5px;
`;

const Year = styled.p`
    font-size: 1rem;
    color: #666666;
`;

const Description = styled.p`
    font-size: 1.1rem;
    color: #4d4d4d;
    margin-top: 15px;
`;

const experienceVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Experience: React.FC = () => {
    const vercelUrl = import.meta.env.VITE_VERCEL_URL;
    //const localUrl = 'http://localhost:3000';
    const [experiences, setExperiences] = useState([{ role: '', company: '', year: '', details: '', gradient: '' }]);

    React.useEffect(() => {
        const fetchIcon = async () => {
            try {
                const response = await fetch(`${vercelUrl}/api/experience.ts`);
                if (!response.ok) {
                    throw new Error('Failed to fetch icon');
                }
                const data = await response.json();
                const experienceResponse = await fetch(data.experiencejson);
                setExperiences(await experienceResponse.json());
            } catch (error) {
                console.error('Error fetching icon:', error);
            }
        };
        fetchIcon();
    }, []);

    // Set up an array to keep track of the flipped state for each card
    const [flippedStates, setFlippedStates] = useState<boolean[]>(experiences.map(() => false));

    const handleFlip = (index: number) => {
        setFlippedStates(prevState =>
            prevState.map((flipped, i) => (i === index ? !flipped : false)) // Flip the clicked card, reset others
        );
    };

    return (
        <ExperienceSection>
            <Title>My Experience</Title>
            <ExperienceContainer>
                {experiences.map((exp, index) => (
                    <ExperienceCard
                        onClick={() => handleFlip(index)}
                        key={index}
                        initial="hidden"
                        animate="visible"
                        variants={experienceVariants}
                        gradient={exp.gradient}
                        isFlipped={flippedStates[index]}
                    >
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <Role>{exp.role}</Role>
                                <Company>{exp.company}</Company>
                                <Year>{exp.year}</Year>
                            </div>
                            <div className="flip-card-back">
                                <Description>{exp.details}</Description>
                            </div>
                        </div>
                    </ExperienceCard>
                ))}
            </ExperienceContainer>
        </ExperienceSection>
    );
};

export default Experience;
