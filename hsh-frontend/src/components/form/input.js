import React from 'react';

const Input = props => {
    return (
        <div className="input-group">
            <input type={props.type} placeholder={props.placeholder} name={props.name} onChange={props.handleChange} required/>
            <label>{props.label}</label>
        </div>
    );
};

export default Input;