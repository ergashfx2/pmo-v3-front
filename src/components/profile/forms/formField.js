import React from 'react';
import { Form } from 'react-bootstrap';

const FormField = ({ controlId, label, name, value, onChange }) => (
    <Form.Group controlId={controlId}>
        <Form.Label>{label}</Form.Label>
        <Form.Control
            type="text"
            name={name}
            value={value}
            onChange={onChange}
        />
    </Form.Group>
);

export default FormField;
