import styled from "styled-components";

const Wrapper = styled.div`
  padding: 20px;
  :hover {
    cursor: pointer;
  }
`;

const Image = styled.img`
  width: 300px;
  background: #efeff0;
`;

const Price = styled.p`
  font-family: monospace;
  font-size: 1.8rem;
  margin: 0;
`;

const Name = styled.h2`
  font-family: monospace;
  font-size: 1.8rem;
  margin: 0;
  text-transform: uppercase;
`;

const DetailsButton = styled.button`
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
  &:hover {
    opacity: 0.8;
  }
`;

export const PokemonCard = ({
  name, image, click, price,
}) => (
  <Wrapper
    onClick={click}
  >
    <Image src={image} alt={name} />
    <Name>{name}</Name>
    <Price>{price || '???'} &euro;</Price>
    <DetailsButton>Details</DetailsButton>
  </Wrapper>
);
