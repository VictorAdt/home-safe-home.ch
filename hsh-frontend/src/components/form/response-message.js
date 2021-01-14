import React from 'react';

const ResponseMessage = props => {
    return (
        <p className="response__form">
            {props.message}
        </p>
    );
};

export default ResponseMessage;