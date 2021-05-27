import { useState, useMemo } from 'react';
import styled from 'styled-components';
import { useHistory } from "react-router-dom";

import { PokemonCard } from "../common/PokemonCard"

const Container = styled.div`
  display: grid;
  grid-template-rows: 50px auto;
  padding: 25px 300px;
  grid-template-columns: auto;
  grid-gap: 1rem;
`;

const CardsWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 340px);
  grid-gap: 1rem;
  justify-content: center;
`;

const FiltersContainer = styled.div`
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: auto 100px;
  grid-gap: 1rem;
  justify-content: center;
`;

const Filter = styled.input`
  font-size: 23px;
`;

export function Overview({ data }) {
  console.log('DATA in overview', data);
  const history = useHistory();
  const [filter, setFilter] = useState('');
  const [sortOption, setSortOption] = useState('none');
  
  const filteredPokemons = useMemo(() => (
    data.filter((pokemon) => pokemon.name.includes(filter.toLowerCase()))
  ), [filter, data]);

  const sortedPokemons = useMemo(() => {
    let pokemons = [];
     if (sortOption === "asc"){
      pokemons = [...data].sort((a,b) => {
        const x = a.name;
        const y = b.name;
        // eslint-disable-next-line no-nested-ternary
        return x < y ? -1 : x > y ? 1 : 0;
    });
    } else if (sortOption === "desc"){
      pokemons = [...data].sort((a,b) => {
        const x = a.name;
        const y = b.name;
        // eslint-disable-next-line no-nested-ternary
        return x > y ? -1 : x < y ? 1 : 0;
      });
    }
    return pokemons;
  }, [data, sortOption])

  const handleCardClick = (id) => {
    history.push(`/${id}`);
  }

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  }
  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  }

  return (
    <Container>
      <FiltersContainer>
        <Filter
          type="text"
          placeholder="Filter pokemons here"
          value={filter}
          onChange={handleFilterChange}
        />
        <select onChange ={handleSortChange}>
          <option value="none">None</option>
          <option value="asc">asc</option>
          <option value="desc">desc</option>
        </select>
      </FiltersContainer>
      <CardsWrapper>
        { sortOption !== "none" ? 
          sortedPokemons.map(({ name, url, price }) => (
            <PokemonCard
              key={name}
              name={name}
              price={price}
              image={`https://pokeres.bastionbot.org/images/pokemon/${
                url.replace('https://pokeapi.co/api/v2/pokemon/', '').replace('/', '')
              }.png`}
              click={() => handleCardClick(url.replace('https://pokeapi.co/api/v2/pokemon/', '').replace('/', ''))}
            />
          ))
          : 
          filteredPokemons.map(({ name, url, price }) => (
            <PokemonCard
              key={name}
              name={name}
              price={price}
              image={`https://pokeres.bastionbot.org/images/pokemon/${
                url.replace('https://pokeapi.co/api/v2/pokemon/', '').replace('/', '')
              }.png`}
              click={() => handleCardClick(url.replace('https://pokeapi.co/api/v2/pokemon/', '').replace('/', ''))}
            />
          ))
        } 
          
        
      </CardsWrapper>
    </Container>
  );
}
