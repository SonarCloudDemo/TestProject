import styled from 'styled-components';

const CartWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    span{
        margin: 10px;

    }
`

export function Cart ({name, price, quantity}){
    return <CartWrapper>
        <span>{name}</span>
        <span>{price} X {quantity}</span>
        <span> {price*quantity} Euro</span>
    </CartWrapper>

}