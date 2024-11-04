import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ExperienceSection = styled.section`
    padding: 10px 20px;
    background: #f2f2f2; /* Light gray background for contrast */
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: Arial, sans-serif;
    margin-bottom: 8;
`;

const Title = styled.h2`
    font-size: 3rem;
    margin-bottom: 50px;
    color: #333333; /* Matches navbar color */
    text-align: center;
`;

const ExperienceContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 30px;
    width: 80%;
    max-width: 800px;
`;

const ExperienceCard = styled(motion.div)<{ gradient: string }>`
    background: ${({ gradient }) => gradient};
    border-radius: 12px;
    padding: 5px 50px 50px 50px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    color: #333333; /* Dark gray for text contrast */
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    &:hover {
        transform: translateY(-8px);
        box-shadow: 0 16px 32px rgba(0, 0, 0, 0.2);
    }
`;

const Role = styled.h3`
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 10px;
`;

const Company = styled.h4`
    font-size: 1.2rem;
    color: #4d4d4d; /* Slightly lighter gray for secondary text */
    margin-bottom: 5px;
`;

const Year = styled.p`
    font-size: 1rem;
    color: #666666; /* Subtle gray for year text */
`;

const Description = styled.p`
    font-size: 1.1rem;
    color: #4d4d4d; /* Consistent gray for description */
    margin-top: 15px;
`;

const experienceVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Experience: React.FC = () => {
    const experiences = [
        { role: 'Software Engineer', company: 'Company A', year: '2022 - Present', details: 'Developed scalable applications and led a small team to success.', gradient: 'linear-gradient(135deg, #e6e6e6, #d9d9d9)' },
        { role: 'Developer Intern', company: 'Company B', year: '2021 - 2022', details: 'Assisted in API development and optimized backend services.', gradient: 'linear-gradient(135deg, #e6e6e6, #d9d9d9)' },
        { role: 'Junior Developer', company: 'Company C', year: '2020 - 2021', details: 'Contributed to frontend development and design.', gradient: 'linear-gradient(135deg, #e6e6e6, #d9d9d9)' },
        // Add more experiences with different gradients as needed
    ];

    return (
        <ExperienceSection>
            <Title>My Experience</Title>
            <ExperienceContainer>
                {experiences.map((exp, index) => (
                    <ExperienceCard
                        key={index}
                        initial="hidden"
                        animate="visible"
                        variants={experienceVariants}
                        gradient={exp.gradient} // Unique gradient per card
                    >
                        <Role>{exp.role}</Role>
                        <Company>{exp.company}</Company>
                        <Year>{exp.year}</Year>
                        <Description>{exp.details}</Description>
                    </ExperienceCard>
                ))}
            </ExperienceContainer>
        </ExperienceSection>
    );
};

export default Experience;
