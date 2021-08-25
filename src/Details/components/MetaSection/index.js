/* eslint-disable react/prop-types */
import styled from "styled-components";
import { titleCase } from "../../utils";
import { Stats } from "./Stats";

const Wrapper = styled.section`
  grid-area: meta;
`;

const BuyButton = styled.button`
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

const Title = styled.h2`
  font-size: 1.8rem;
  margin: 0;
  text-transform: uppercase;
`;

const Type = styled.p`
  margin: 0 0 0.2rem 0;
  font-size: 1.4rem;
  font-family: serif;
`;

const Price = styled.p`
  font-size: 1.8rem;
  margin: 1rem 0;
`;

const PriceTax = styled.span`
  font-size: 0.6em;
  margin-left: 0.3em;
  color: #66676e;
`;

const SubTitle = styled.h3`
  margin: 40px 0 12px 0;
  padding-bottom: 4px;
  border-bottom: 1px solid grey;
`;

const MetaSection = ({ type, name, price, stats, abilities, onAddToCart }) => (
  <Wrapper>
    <Type>{titleCase(type)}</Type>
    <Title>{titleCase(name)}</Title>

    <Price>
      {price} ¥ <PriceTax>VAT included</PriceTax>
    </Price>

    <BuyButton onClick={onAddToCart}>Add to bag</BuyButton>

    <SubTitle>Stats</SubTitle>
    <Stats data={stats} />

    <SubTitle>Abilities</SubTitle>
    {abilities.map((ability) => {
      const entryEN = ability.effect_entries.find(
        (e) => e.language.name === "en"
      );

      return (
        <p key={ability.id}>
          {titleCase(ability.name)}: {entryEN.short_effect}
        </p>
      );
    })}
  </Wrapper>
);

export { MetaSection };
