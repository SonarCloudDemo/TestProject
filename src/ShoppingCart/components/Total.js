import styled from "styled-components";
import { Link } from "react-router-dom";
import { HRStyle } from "./Hr";

const TotalItemStyle = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CheckoutButton = styled.button`
  font-family: inherit;
  font-size: 100%;
  line-height: 1.15;
  font-weight: 700;
  margin: 24px 0 32px 0;
  width: 100%;
  background-color: black;
  color: white;
  outline: none;
  display: inline-flex;
  justify-content: center;
  border: 0;
  cursor: pointer;
  padding: 24px 0;

  align-self: end;
  &:hover {
    opacity: 0.8;
  }
`;

export const Total = ({ total }) => (
  <div>
    <h2>Total</h2>
    <TotalItemStyle>
      <span>Subtotal</span>
      <span>{(total * 0.8).toFixed(2)}</span>
    </TotalItemStyle>
    <HRStyle />
    <TotalItemStyle>
      <strong>Total (VAT included)</strong>
      <strong>{total}</strong>
    </TotalItemStyle>
    <HRStyle />
    <Link to="/checkout">
    <CheckoutButton>Checkout</CheckoutButton></Link>
  </div>
);
