import React from "react";
import styled from "styled-components";

const Card = styled.div`
    height: 300px;
    width: 250px;
    background: white;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    padding: 5px;
    margin: 10px;
    gap: 15px;
`;

const CardTitle = styled.h1`
    font-size: 15px;
    color: ${props => props.color};
`;

const CardImage = styled.img`    
    background-color: white;
    border-radius: 100px;
    height: 100px;
    width: 100px;
    border: 3px solid ${props => props.color};
    border-bottom-color: white;
    border-left-color: white;
`;

const CardDesignation = styled.p`
    background: ${props => props.color};
    border-radius: 5px;
    padding: 5px 10px;
    font-size: 12px;
    font-weight: 800;
    color: white;
`;

const CardInformation = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
    margin-bottom: 5px;
    margin-top: 5px;
`;

const CardData = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 12px;
    margin: 2px;
`;

const CardLabel = styled.p`
    font-size: 13px;
    font-weight: 700;
`;

const CardInfo = styled.p`
    font-size: 13px;
`;

function EmployeeCard(props) {
    let colors = ['red', 'orange', 'blue', 'purple', 'green', 'pink'];
    const color = colors[Math.floor(Math.random() * colors.length)];
    return (
        <Card key={props.user.id}>
            <CardImage color={color} src={props.user.avatar} />
            <CardTitle color={color}>{`${props.user.first_name} ${props.user.last_name}`}</CardTitle>
            <CardDesignation color={color}>{'Product Manager'}</CardDesignation>
            <CardInformation>
                <CardData>
                    <CardLabel>{"Employee Id :"}</CardLabel>
                    <CardInfo>{"123456"}</CardInfo>
                </CardData>
                <CardData>
                    <CardLabel>{"Email :"}</CardLabel>
                    <CardInfo>{props.user.email}</CardInfo>
                </CardData>
                <CardData>
                    <CardLabel>{"Mobile :"}</CardLabel>
                    <CardInfo>{"9003164637"}</CardInfo>
                </CardData>
                <CardData>
                    <CardLabel>{"Department :"}</CardLabel>
                    <CardInfo>{"Gigitech Com"}</CardInfo>
                </CardData>
            </CardInformation>
        </Card>
    )
}

export default EmployeeCard;