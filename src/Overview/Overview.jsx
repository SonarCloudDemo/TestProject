import { useState, useMemo } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import { PokemonCard } from "../common/PokemonCard";
import { Loader } from "../common/Loader";

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

const NoResultsContainer = styled.div`
  height: 150px;
  width: 400px;
  text-align: center;
  border: 1px solid black;
  margin-left: auto;
  margin-right: auto;
`;

export const Overview = ({ data, isLoading }) => {
  const [filter, setFilter] = useState("");
  const [sorting, setSorting] = useState("");
  const history = useHistory();

  const handlePokemonClick = (id) => {
    history.push(`/pokemon/${id}`);
  };
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const handleSotringChange = (e) => {
    setSorting(e.target.value);
  };

  const filteredPokemons = useMemo(() => {
    let pokemons = [];
    switch (sorting) {
      case "ASC":
        pokemons = [...data].sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "DESC":
        pokemons = [...data]
          .sort((a, b) => a.name.localeCompare(b.name))
          .reverse();
        break;
      default:
        pokemons = [...data];
        break;
    }

    if (!filter.length) {
      return pokemons;
    }

    return pokemons.filter((p) => p.name.includes(filter.toLowerCase()));
  }, [data, filter, sorting]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Container>
      <FiltersContainer>
        <Filter
          type="text"
          placeholder="Filter pokemons by name"
          value={filter}
          onChange={handleFilterChange}
        />
        <select name="sorting" onChange={handleSotringChange} value={sorting}>
          <option value="">No sorting</option>
          <option value="ASC">ASC</option>
          <option value="DESC">DESC</option>
        </select>
      </FiltersContainer>
      {filteredPokemons.length ? (
        <CardsWrapper>
          {filteredPokemons.map((pokemon, index) => (
            <PokemonCard
              key={pokemon.name}
              image={pokemon.sprites.other["official-artwork"].front_default}
              name={pokemon.name}
              click={() => handlePokemonClick(index + 1)}
              price={pokemon.base_experience}
            />
          ))}
        </CardsWrapper>
      ) : (
        <NoResultsContainer>
          <p>No pokemons found</p>
          <p>Try another filter to see more results.</p>
        </NoResultsContainer>
      )}
    </Container>
  );
};
