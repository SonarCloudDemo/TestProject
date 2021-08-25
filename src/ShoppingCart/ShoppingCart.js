import styled from "styled-components";
import { useState } from "react";
import { GRAY } from "./constants";
import { Card } from "./components/Card";
import { Total } from "./components/Total";
import { getCartItems, removeFromCart } from "../common/pokemonStorage";

const LayoutStyle = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  max-width: 1024px;
  background-color: ${GRAY};
  margin: auto;
`;

const PanelStyle = styled.div`
  margin: 1rem;
  background-color: white;
  padding: 1rem;
`;

const ScrollStyle = styled.div`
  overflow-y: scroll;
  max-height: 500px;
`;

export function ShoppingCart() {
  const [cart, setCart] = useState(getCartItems());

  const handleRemove = (name) => {
    setCart(removeFromCart(name));
  };
  
  if (cart.length === 0) {
    return (
      <LayoutStyle>
        <PanelStyle>
          <h2>Your cart is empty</h2>{" "}
        </PanelStyle>
      </LayoutStyle>
    );
  }

  return (
    <LayoutStyle>
      <PanelStyle>
        <h2>Place you order ({cart.length} article)</h2>
        <ScrollStyle>
          {cart.map((item) => (
            <Card
              key={item.name}
              {...item}
              onRemove={() => handleRemove(item.name)}
            />
          ))}
        </ScrollStyle>
      </PanelStyle>
      <PanelStyle>
        <Total total={cart.reduce((acc, current) => acc + current.price * current.quantity, 0)} />
      </PanelStyle>
    </LayoutStyle>
  );
}
