import React from 'react';
import {Table} from "react-bootstrap";
function MyTable({thead_elements,tbody}) {    
    return (
        <Table striped bordered>
            <thead>
            <tr>
            {thead_elements.map((element)=>(
                    <th>{element}</th>
            
            ))}
            </tr>
            </thead>
            <tbody>
                {tbody}
            </tbody>
        </Table>
    );
}

export default MyTable;