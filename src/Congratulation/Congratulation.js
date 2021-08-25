import styled from "styled-components";

const Message = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export function Congradulation (){
    const user = JSON.parse(localStorage.getItem('user'));
    return <Message>
        <h1> Congratulations {user.name.toUpperCase()} {user.surname.toUpperCase()}</h1>
        <p> your order has been placed</p>
    </Message>
}