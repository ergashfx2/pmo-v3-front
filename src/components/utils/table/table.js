import React from 'react';
import {Table} from "react-bootstrap";
function MyTable({thead_elements,tbody_elements}) {
    return (
        <Table striped bordered>
            <thead>
            {thead_elements.map((element)=>(
                <tr>
                    <th>{element}</th>
                </tr>
            ))}
            </thead>
            <tbody>
            {tbody_elements.map((el)=>(
                <tr>
                    <th>{el}</th>
                </tr>
            ))}
            </tbody>
        </Table>
    );
}

export default MyTable;