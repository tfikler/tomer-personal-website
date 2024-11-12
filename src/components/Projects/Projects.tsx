import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './Projects.css';
import { Github, ExternalLink, Play } from 'lucide-react';

const ProjectSection = styled.section`
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

    @media (max-width: 768px) {
        font-size: 2.5rem;
    }
`;

const ProjectContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 30px;
    width: 120%;
    max-width: 1200px;
    margin: 0 auto; /* Center the carousel */

    @media (max-width: 768px) {
        width: 100%;
    }
`;

const ProjectCard = styled(motion.div)<{ gradient: string; isFlipped: boolean }>`
    background: ${({ gradient }) => gradient};
    border-radius: 12px;
    padding: 5px 20px 20px 20px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #333333;
    cursor: pointer;
    perspective: 1000px;
    height: 400px;
    position: relative;
    margin: 10%;
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

const ProjectTitle = styled.h3`
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 10px;
    text-align: center;
    
    @media (max-width: 768px) {
        font-size: 1.5rem;
    }
`;

const TechStack = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin: 15px 0;
    justify-content: center;
`;

const TechTag = styled.span`
    padding: 6px 12px;
    border-radius: 20px;
    background: rgba(255, 255, 255, 0.2);
    font-size: 0.9rem;
`;

const Description = styled.p`
    font-size: 1.1rem;
    color: #4d4d4d;
    margin: 15px 0;
    text-align: center;
`;

const Links = styled.div`
    display: flex;
    gap: 20px;
    margin-top: 20px;
`;

const LinkButton = styled.a`
    display: flex;
    align-items: center;
    gap: 8px;
    color: #333333;
    text-decoration: none;
    padding: 8px 16px;
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.3);
    transition: background 0.3s ease;

    &:hover {
        background: rgba(255, 255, 255, 0.5);
    }
`;

const ProjectPreview = styled.div`
    width: 100%;
    height: 180px;
    border-radius: 8px;
    overflow: hidden;
    position: relative;
    margin-bottom: 15px;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .play-button {
        position: absolute;
        inset: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(0, 0, 0, 0.4);
        transition: background 0.3s ease;

        &:hover {
            background: rgba(0, 0, 0, 0.3);
        }
    }
`;

const projectVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Projects: React.FC = () => {
    const projects = [
        {
            title: "E-Commerce Dashboard",
            description: "A full-stack dashboard for managing online store inventory, sales, and customer data. Features include real-time analytics, inventory management, and sales reporting.",
            preview: "/api/placeholder/640/360",
            github: "https://github.com/username/ecommerce-dashboard",
            liveDemo: "https://dashboard-demo.com",
            techStack: ["React", "Node.js", "MongoDB", "Express", "Redux", "Tailwind CSS"],
            gradient: "linear-gradient(135deg, #e6e6e6, #d9d9d9)"
        },
        {
            title: "Weather App",
            description: "Real-time weather application that provides detailed forecasts, radar maps, and severe weather alerts using multiple weather APIs.",
            preview: "/api/placeholder/640/360",
            github: "https://github.com/username/weather-app",
            liveDemo: "https://weather-app-demo.com",
            techStack: ["React", "TypeScript", "OpenWeather API", "Styled Components"],
            gradient: "linear-gradient(135deg, #e6e6e6, #d9d9d9)"
        },
        {
            title: "Social Media App",
            description: "A social media platform that allows users to create posts, follow other users, and interact with posts through likes and comments.",
            preview: "/api/placeholder/640/360",
            github: "https://github.com/username/weather-app",
            liveDemo: "https://weather-app-demo.com",
            techStack: ["React", "TypeScript", "OpenWeather API", "Styled Components"],
            gradient: "linear-gradient(135deg, #e6e6e6, #d9d9d9)"
        }
    ];

    const [flippedStates, setFlippedStates] = useState<boolean[]>(projects.map(() => false));

    const handleFlip = (index: number) => {
        setFlippedStates(prevState =>
            prevState.map((flipped, i) => (i === index ? !flipped : false))
        );
    };

    return (
        <ProjectSection>
            <Title>My Projects</Title>
            <ProjectContainer>
                <Carousel
                    additionalTransfrom={0}
                    arrows
                    autoPlaySpeed={3000}
                    centerMode={false}
                    className=""
                    containerClass="container"
                    dotListClass=""
                    draggable
                    focusOnSelect={false}
                    infinite
                    itemClass=""
                    keyBoardControl
                    minimumTouchDrag={80}
                    pauseOnHover
                    renderArrowsWhenDisabled={false}
                    renderButtonGroupOutside={false}
                    renderDotsOutside={false}
                    responsive={{
                        desktop: {
                            breakpoint: {
                                max: 3000,
                                min: 1024
                            },
                            items: 2,
                            partialVisibilityGutter: 40
                        },
                        mobile: {
                            breakpoint: {
                                max: 768,
                                min: 0
                            },
                            items: 1,
                        },
                    }}
                    rewind={false}
                    rewindWithAnimation={false}
                    rtl={false}
                    shouldResetAutoplay
                    showDots={false}
                    sliderClass=""
                    slidesToSlide={1}
                    swipeable
                >
                {projects.map((project, index) => (
                    <ProjectCard
                        onClick={() => handleFlip(index)}
                        key={index}
                        initial="hidden"
                        animate="visible"
                        variants={projectVariants}
                        gradient={project.gradient}
                        isFlipped={flippedStates[index]}
                    >
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <ProjectPreview>
                                    <img src={project.preview} alt={project.title} />
                                    <div className="play-button">
                                        <Play size={48} color="white" />
                                    </div>
                                </ProjectPreview>
                                <ProjectTitle>{project.title}</ProjectTitle>
                                <TechStack>
                                    {project.techStack.map((tech, techIndex) => (
                                        <TechTag key={techIndex}>{tech}</TechTag>
                                    ))}
                                </TechStack>
                            </div>
                            <div className="flip-card-back">
                                <Description>{project.description}</Description>
                                <Links>
                                    <LinkButton href={project.github} target="_blank" rel="noopener noreferrer">
                                        <Github size={20} />
                                        GitHub
                                    </LinkButton>
                                    <LinkButton href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                                        <ExternalLink size={20} />
                                        Live Demo
                                    </LinkButton>
                                </Links>
                            </div>
                        </div>
                    </ProjectCard>
                ))}
            </Carousel>
            </ProjectContainer>
        </ProjectSection>
    );
};

export default Projects;