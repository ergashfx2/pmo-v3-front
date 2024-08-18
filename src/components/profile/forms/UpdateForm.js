import React, { useEffect } from 'react';
import { Button, Card, Col,Form, Row } from 'react-bootstrap';
import {useLocation, useNavigate} from 'react-router-dom';
import useForm from "./useForm";
import FormField from "./formField";
import userService from "../../../services/api/userService";
import data from "bootstrap/js/src/dom/data";
const UpdateForm = () => {
    const location = useLocation();
    const user = location.state?.user || {};
    const navigate = useNavigate()
    const [formData, handleChange] = useForm({
        first_name: user.first_name || '',
        last_name: user.last_name || '',
        position: user.position || '',
        phone: user.phone || '',
        blog: user.blog || '',
        department: user.department || '',
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        await userService.updateMyProfile(formData).then(res=>{
            navigate('/my-profile/')
        })

    };

    return (
        <Row>
            <Col xs={2}></Col>
            <Col xs={8}>
                <Card>
                    <Card.Header>
                        <h5 className={'p-3'}>Profilni tahrirlash</h5>
                    </Card.Header>
                    <Card.Body>
                        <Form className={'p-3'} onSubmit={handleSubmit}>
                            <FormField
                                controlId="first_name"
                                label="Ism"
                                name="first_name"
                                value={formData.first_name}
                                onChange={handleChange}
                            />
                            <FormField
                                controlId="last_name"
                                label="Familiya"
                                name="last_name"
                                value={formData.last_name}
                                onChange={handleChange}
                            />
                            <FormField
                                controlId="position"
                                label="Lavozim"
                                name="position"
                                value={formData.position}
                                onChange={handleChange}
                            />
                            <FormField
                                controlId="phone"
                                label="Telefon"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                            />
                            <FormField
                                controlId="blog"
                                label="Blog"
                                name="blog"
                                value={formData.blog}
                                onChange={handleChange}
                            />
                            <FormField
                                controlId="department"
                                label="Departament"
                                name="department"
                                value={formData.department}
                                onChange={handleChange}
                            />
                            <Button className={'mt-3'} variant="primary" type="submit">
                                Yangilash
                            </Button>
                        </Form>
                    </Card.Body>
                </Card>
            </Col>
            <Col xs={2}></Col>
        </Row>
    );
};

export default UpdateForm;
