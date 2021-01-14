import React, { useState, useEffect } from 'react';
import Input from './input';
import axios from 'axios'
import ResponseMessage from './response-message';

const ContactForm = () => {
    const [message, setMessage] = useState(null)
    const [filed, setFiled] = useState(false)
    const [contact, setContact] = useState({
        nom: '',
        prenom: '',
        email: '',
        telephone: '',
        message: '',
    });

    const handleChange = async e => {
        await setContact({ ...contact, [e.target.name]: e.target.value })
        if (
            contact.nom !== ''
            && contact.prenom !== ''
            && contact.email !== ''
            && contact.message !== ''
            && contact.telephone !== ''
        ) {
            await setFiled(true)
        } else {
            setFiled(false)
        }
    }

    useEffect(() => {
        console.log(contact);
    }, [contact]);

    const handleSubmit = async e => {
        e.preventDefault()

        if (contact.nom === "" ||
            contact.prenom === "" ||
            contact.email === "" ||
            contact.telephone === "" ||
            contact.message === ""
        ) {
            window.scrollTo({ top: 0, behavior: 'smooth' })
            setMessage('Merci de remplir tous les champs')
            return
        }
        else {
            window.scrollTo({ top: 0, behavior: 'smooth' })
            setMessage('Envoi du message')
            const data = {
                nom: contact.nom,
                prenom: contact.prenom,
                email: contact.email === "" ? 'null' : contact.email,
                telephone: contact.telephone,
                message: contact.message
            }
            try {
                const contactRes = await axios({
                    method: 'POST',
                    url: 'http://45.66.223.134/contacts',
                    data,
                })
                console.log(contactRes);
                if (contactRes.status === 200) {
                    setMessage('Message envoyé')
                    setTimeout(() => {
                        window.location.pathname = '/'
                    }, 500)
                    return
                }
                console.log(message);
            } catch (e) {
                console.log(e.response.status);
                if (e.response.status === 500) {
                    setMessage('Une erreur est survenue')
                } else if (e.response.status === 400) {
                    setMessage(`Merci d'entrer un numéro de téléphone et une adresse email valide`)
                }
            }
        }
    }

    return (
        <>
            <ResponseMessage
                message={message}
            />
            <form>
                <Input
                    handleChange={handleChange}
                    name={'nom'}
                    label={'Nom'}
                    type={'text'}
                />
                <Input
                    handleChange={handleChange}
                    name={'prenom'}
                    label={'Prenom'}
                    type={'text'}
                />
                <Input
                    handleChange={handleChange}
                    name={'email'}
                    label={'email'}
                    type={'email'}
                />
                <Input
                    handleChange={handleChange}
                    name={'telephone'}
                    label={'Telephone'}
                    type={'number'}
                />
                <div className="contactform__message__textarea">
                    <label>Message</label>
                    <textarea name="message" onChange={handleChange} />
                </div>
                <div
                    style={{
                        cursor: filed ? 'pointer' : 'not-allowed',
                    }}
                >
                    <button
                        style={{
                            pointerEvents: filed ? '' : 'none',
                            backgroundColor: filed ? '#e7205b' : '#c8c8c8'
                        }}
                        onClick={handleSubmit}>Envoyer</button>
                </div>
            </form>
        </>
    );
};

export default ContactForm;