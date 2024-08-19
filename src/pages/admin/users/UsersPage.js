import React, { useEffect, useState } from 'react';
import UsersTool from '../../../components/users/UsersTool';
import { Container } from 'react-bootstrap';
import Table from '../../../components/utils/table/table'


const UsersPage = () => {

    const [users,setUsers] = useState()
    useEffect(() => {
        const users = async () => {
            await AdminService.getUsers()
        }

    }, []);	
    
    return (
        <div>
            <Container>
                <UsersTool/>
            </Container>
            <Table thead_elements={['№','FIO','STATUS',"RO'LI","RAQAMI"]} tbody={
                <tr></tr>
            }/>
        </div>
    );
};

export default UsersPage;