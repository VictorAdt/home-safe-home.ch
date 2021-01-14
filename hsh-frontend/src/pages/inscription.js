import React, { useEffect } from 'react';
import Layout from '../components/layout';
import AtelierCard from '../components/atelier/atelier-card';
import SubscriptionForm from '../components/form/subscription-form';


const Subscription = props => {
    useEffect(() => {
        if (!props.location.state) {
            window.location.pathname = '/'
        }
    }, [])
    return (
        <Layout>
            {props.location.state &&
                <div className="page sub">
                    <AtelierCard
                        atelier={props.location.state.atelier}
                    />
                    <SubscriptionForm 
                        atelier={props.location.state.atelier}
                    />
                </div>
            }
        </Layout>

    );

};

export default Subscription;