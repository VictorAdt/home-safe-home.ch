import React from 'react';
import ContactForm from '../components/form/contact-form';
import Layout from "../components/layout"
import SEO from './../components/seo'

const Contact = () => {
    return (
        <Layout>
            <SEO
                title="Contact"
                lang="fr"
                description="Page de contact"
            />
            <div className="page contact">
                <h1>Contact</h1>
                <ContactForm />
            </div>
        </Layout>
    );
};

export default Contact;