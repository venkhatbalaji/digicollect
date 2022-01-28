import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import EmployeeCard from './EmployeeCard';
import GetApi from "../../common/Api/get";


const EmployeeCards = styled.div`
    background-color: #9ad4f5;
    width: auto;
    height: auto;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 30px;
    border-radius: 15px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 20px;
`;

function EmployeeDetails() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        GetApi('https://reqres.in/api/users/').then(
            (data) => {
                setUsers(data)
            }
        )
    }, [])
    return (
        <EmployeeCards>
            {users.length > 0 && users.map((user) => {
                return (
                    <EmployeeCard user={user} />
                )
            })}
        </EmployeeCards>
    );
}

export default EmployeeDetails;