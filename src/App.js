import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Overview } from "./Overview";
import { Checkout } from "./Checkout/Checkout";
import { Details } from "./Details/Details";
import { OrderCompleted } from "./OrderCompleted/OrderCompleted";
import { ShoppingCart } from "./ShoppingCart/ShoppingCart";

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

export default function App() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
      .then((response) => response.json())
      .then(( { results } ) => results.map((pokemon, index) => ({
        ...pokemon,
        price: (Math.random() * index + 1).toFixed(2)
      })))
      .then((data) => {
        setPokemons(data);
      })
      .catch((e) => {
        console.log(e);
      })
  }, []);

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/shopping-cart">ShoppingCart</Link>
            </li>
            <li>
              <Link to="/checkout">Checkout</Link>
            </li>
            <li>
              <Link to="/order-completed">Order Completed</Link>
            </li>
            <li>
              <Link to="/detail123">Detail</Link>
            </li>
          </ul>
        </nav>
        <Title>Pokemon ecommerce</Title>
        <Switch>
          <Route exact path="/">
            <Overview
              data={pokemons}
            />
          </Route>
          <Route path="/shopping-cart">
            <ShoppingCart />
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/order-completed">
            <OrderCompleted />
          </Route>
          <Route path="/:id">
            <Details />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
