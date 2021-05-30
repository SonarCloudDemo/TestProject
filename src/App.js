import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Overview } from "./Overview";
import { Checkout } from "./Checkout/Checkout";
import { Details } from "./Details";
import { OrderCompleted } from "./OrderCompleted/OrderCompleted";
import { ShoppingCart } from "./ShoppingCart/ShoppingCart";

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
  border-bottom: 1px solid #d0d1d3;
`;

const NavBar = styled.nav`
  height: 50px;
  display: flex;
  justify-content: space-between;
  background-color: #333;
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
  }

  li {
    float: left;
  }

  li a {
    display: block;
    color: white;
    text-align: center;
    padding: 16px 16px;
    text-decoration: none;
  }

  li a:hover {
    background-color: #111;
  }
`;

const Container = styled.div`
  overflow: hidden;
`;

const useData = () => {
  const [pokemons, setPokemons] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
      .then((response) => response.json())
      .then(({ results }) =>
        Promise.all(
          results.map((r) =>
            fetch(`https://pokeapi.co/api/v2/pokemon/${r.name}`)
          )
        ).then((responses) => Promise.all(responses.map((res) => res.json())))
      )
      .then((data) => {
        setPokemons(data);
        setIsLoading(false);
      })
      .catch((e) => {
        console.log(e);
        setIsLoading(false);
      });
  }, []);

  return {
    pokemons,
    isLoading,
  };
};

const App = () => {
  const { pokemons, isLoading } = useData();

  return (
    <Router>
      <NavBar>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/shopping-cart">ShoppingCart</Link>
          </li>
          <li>
            <Link to="/order-completed">Order Completed</Link>
          </li>
        </ul>
        <Title>Pokemon ecommerce</Title>
        <ul>
          <li>
            <Link to="/checkout">Checkout</Link>
          </li>
        </ul>
      </NavBar>
      <Container>
        <Switch>
          <Route exact path="/">
            <Overview data={pokemons} isLoading={isLoading} />
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
          <Route path="/pokemon/:id">
            <Details data={pokemons} />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
};

export default App;
