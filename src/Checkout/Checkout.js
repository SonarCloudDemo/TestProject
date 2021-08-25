import styled from "styled-components";
import { useReducer} from "react";
// import {Link } from "react-router-dom";

const InputWrapper = styled.form`
  display: flex;
  flex-direction:column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  input {
    width: 200px;
    height: 40px;
    border-radius: 8px;
    margin: 5px;
    padding: 5px;
  }
  button{
    background-color: black;
    color: white;
    width: 200px;
    height: 40px;
    border-radius: 8px;
    margin: 5px;
    padding: 5px;
    a {
      color: white;
      text-decoration: none;
    }
    &:hover{
      background-color: gray;
      
    }
  }
`;

const formUpdater = (state, action) => {
  switch(action.type){
    case "NAME": 
      return {...state, name: action.value }
    case "SURNAME":
      return {...state, surname: action.value }
      case "ADDRESS":
      return {...state, address: action.value }
      case "CREDIT":
      return {...state, credit: action.value }
    default : 
    return state 
  }
  
  

}

export function Checkout() {
const [state, dispatch] = useReducer(formUpdater, {
  name: "",
  surname: "",
  address: "",
  credit: "",
}
  )

  return <div>
    <InputWrapper action="/order-completed" >
      <input type="text" placeholder="Name" value={state.name} onChange={(e) => dispatch({type: "NAME", value: e.target.value})}/>
      <input type="text" placeholder="Surname" value={state.surname} onChange={(e) => dispatch({type: "SURNAME", value: e.target.value})} />
      <input type="text" placeholder="Adress" value={state.address} onChange={(e) => dispatch({type: "ADDRESS", value: e.target.value})}/>
      <input type="number" placeholder="Credit Card Number" value={state.credit} onChange={(e) => dispatch({type: "CREDIT", value: e.target.value})}/>
      <button type="submit" onClick={() => {
  
        localStorage.setItem('user', JSON.stringify(state));
      }}>Place Order</button>
      <p> {JSON.stringify(state)}</p>
    </InputWrapper>
  </div>
  
}
