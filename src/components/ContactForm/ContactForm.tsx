import React, {useRef, useState} from 'react';
import emailjs from '@emailjs/browser'
import styled from 'styled-components';

const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
`;

const ModalContainer = styled.div`
    background: #f2f2f2;
    border-radius: 12px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    padding: 40px;
    max-width: 600px;
    width: 100%;
    position: relative;
    font-family: Arial, sans-serif;
`;

const CloseButton = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    color: #333;
`;

const FormTitle = styled.h2`
    color: #333333;
    text-align: center;
    font-size: 2rem;
    margin-bottom: 20px;
`;

const Input = styled.input`
    width: 100%;
    padding: 12px;
    margin: 8px 0;
    border-radius: 8px;
    border: 1px solid #ccc;
    font-size: 1rem;
`;

const TextArea = styled.textarea`
    width: 100%;
    padding: 12px;
    margin: 8px 0;
    border-radius: 8px;
    border: 1px solid #ccc;
    font-size: 1rem;
    min-height: 150px;
`;

const SubmitButton = styled.button`
    background: linear-gradient(135deg, #e6e6e6, #d9d9d9);
    border: none;
    padding: 12px 24px;
    border-radius: 8px;
    font-size: 1.1rem;
    color: #333333;
    cursor: pointer;
    transition: background 0.3s ease;
    width: 100%;

    &:hover {
        background: linear-gradient(135deg, #d9d9d9, #c6c6c6);
    }
`;

const Message = styled.p<{ isError: boolean }>`
    color: #333333;
    text-align: center;
    font-size: 2rem;
    margin-top: 15px;
`;

const SendAgainButton = styled.button`
    background: linear-gradient(135deg, #e6e6e6, #d9d9d9);
    border: none;
    padding: 10px 20px;
    border-radius: 8px;
    font-size: 1rem;
    color: #333333;
    cursor: pointer;
    display: block;
    margin: 20px auto 0;
    transition: background 0.3s ease;

    &:hover {
        background: linear-gradient(135deg, #d9d9d9, #c6c6c6);
    }
`;


const ContactForm = ({ isOpen, onClose }:{isOpen: boolean, onClose: any}) => {
    const formRef = useRef<HTMLFormElement>(null);
    const [message, setMessage] = useState('');
    const [isError, setIsError] = useState(false);

    const sendEmail = (e: any) => {
        e.preventDefault();
        if (!formRef.current) return;
        emailjs
            .sendForm('service_445k8an', 'template_z14mp9q', formRef.current, {
                publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
            })
            .then(
                (result: any) => {
                    setMessage('Thanks for reaching out! I will get back to you soon.');
                    setIsError(false);
                    console.log(result);
                    formRef.current?.reset();
                },
                (error: any) => {
                    setMessage('An error occurred. Please try again later.');
                    console.log(error);
                    setIsError(true);
                }
            );
    };

    if (!isOpen) return null; // Render nothing if the modal is closed

    return (
        <Overlay>
            <ModalContainer>
                <CloseButton onClick={onClose}>&times;</CloseButton>
                {message === '' ? (
                    <>
                        <FormTitle>Contact Me</FormTitle>
                        <form ref={formRef} onSubmit={sendEmail}>
                            <Input type="text" name="user_name" placeholder="Your Name" required />
                            <Input type="email" name="user_email" placeholder="Your Email" required />
                            <Input type="text" name="subject" placeholder="Subject" required />
                            <TextArea name="message" placeholder="Your Message" required />
                            <SubmitButton type="submit">Send Message</SubmitButton>
                        </form>
                    </>
                ) : (
                    <>
                        <Message isError={isError}>{message}</Message>
                        <SendAgainButton onClick={()=>{setMessage('')}}>Send Again</SendAgainButton>
                    </>
                )}
            </ModalContainer>
        </Overlay>
    );
};

export default ContactForm;
