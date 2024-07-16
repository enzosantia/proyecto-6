import React from 'react';
import { Piee } from './piee.jsx';
import { Encab } from './encabesado.jsx';
import { Form } from './form.jsx';

function index() {
    return (
        <div>
            <Encab />
            <Form />
            <Piee />
        </div>
    )
}


export default index;