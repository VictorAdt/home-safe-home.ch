import React, { useState, useEffect } from 'react';
import Input from './input';
import axios from 'axios'
import ResponseMessage from './response-message';

const SubscriptionForm = props => {
    console.log(props);
    const [filed, setFiled] = useState(false)
    const [message, setMessage] = useState('')
    const [inscription, setInscription] = useState({
        nom: '',
        prenom: '',
        entreprise: '',
        adresse: '',
        npa: '',
        localite: '',
        email: '',
        nb: '',
        telephone: '',
    });

    const handleChange = async (e) => {
        setInscription({ ...inscription, [e.target.name]: e.target.value })
        console.log(inscription)
        if (
            inscription.nom !== ''
            && inscription.prenom !== ''
            && inscription.adresse !== ''
            && inscription.npa !== ''
            && inscription.localite !== ''
            && inscription.email !== ''
            && inscription.nb !== ''
            && inscription.telephone !== ''
        ) {
            await setFiled(true)
        } else {
            setFiled(false)
        }
        console.log(filed);
    }

    useEffect(() => {
        console.log(inscription);
    }, [inscription]);

    const handleSubmit = async e => {
        e.preventDefault()
        window.scrollTo({ top: 0, behavior: 'smooth' })
        const data = {
            nom: inscription.nom,
            prenom: inscription.prenom,
            entreprise: inscription.entreprise,
            adresse: inscription.adresse,
            email: inscription.email,
            telephone: inscription.telephone,
            npa: inscription.npa,
            localite: inscription.localite,
            participant: inscription.nb,
            atelier: {
                id: props.atelier.strapiId,
                titre: props.atelier.titre
            }
        }
        setMessage('Envoi du message')

        try {
            const SubRes = await axios({
                method: 'POST',
                url: 'http://45.66.223.134/inscriptions',
                data,
            })
            if (SubRes.status === 200) {
                setMessage('Message envoyé')
                setTimeout(() => {
                    window.location.pathname = '/'
                }, 500)
                return
            }
        } catch (e) {
            console.log(e.response.status);
            if (e.response.status === 500) {
                setMessage('Une erreur est survenue')
            } else if (e.response.status === 400) {
                setMessage(`Merci d'entrer un numéro de téléphone et une adresse email valide`)
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
                    name={'entreprise'}
                    label={'Entreprise'}
                    type={'text'}
                />
                <Input
                    handleChange={handleChange}
                    name={'adresse'}
                    label={'Adresse'}
                    type={'text'}
                />
                <Input
                    handleChange={handleChange}
                    name={'npa'}
                    label={'NPA'}
                    type={'text'}
                />
                <Input
                    handleChange={handleChange}
                    name={'localite'}
                    label={'Localité'}
                    type={'text'}
                />
                <Input
                    handleChange={handleChange}
                    name={'email'}
                    label={'Email'}
                    type={'text'}
                />
                <Input
                    handleChange={handleChange}
                    name={'nb'}
                    label={'Nombre de participant'}
                    type={'text'}
                />
                <Input
                    handleChange={handleChange}
                    name={'telephone'}
                    label={'Telephone'}
                    type={'text'}
                />
            </form>
            <div
                style={{
                    cursor: filed ? 'pointer' : 'not-allowed',
                }}
            >
                <button
                    style={{
                        backgroundColor: filed ? '#e7205b' : '#c8c8c8',
                        pointerEvents: filed ? '' : 'none'
                    }}
                    onClick={handleSubmit}>S'inscrire
                </button>
            </div>

        </>

    );
};

export default SubscriptionForm;