import {Link} from "react-router-dom";
import styled from "styled-components";
import {Cart} from "./components/cart";

const User = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

`;

const handleComplete = () => {
  localStorage.removeItem("cart");
  
}

export function OrderCompleted() {

const user = JSON.parse(localStorage.getItem('user'));
const cart = JSON.parse(localStorage.getItem('cart'));
  return <User>
    <div> {user.name.toUpperCase()} {user.surname.toUpperCase()}</div>
    
    {cart && cart.map(x => 
        <Cart key={x.name}
              name={x.name.toUpperCase()}
              price={x.price}
              quantity={x.quantity}/>
    )}
    <h1>Total Price: { cart && cart.reduce((acc, current) => acc + current.price * current.quantity, 0)} Euro</h1>
    <Link to="/congratulation"><button type="button" onClick={handleComplete}>Complete The Order</button></Link>
  </User>
}
