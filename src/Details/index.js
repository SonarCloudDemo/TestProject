/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import styled from "styled-components";
import { DetailsLayout } from "./components/DetailsLayout";
import { ImageSection } from "./components/ImageSection";
import { ThumbnailSection } from "./components/ThumbnailSection";
import { MetaSection } from "./components/MetaSection";
import { addToCart } from "../common/pokemonStorage";

const CrossSellingSection = styled.div`
  grid-area: crossselling;
  margin-top: 24px;
  width: 100%;
  height: 50px;
`;

export function Details() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [selectedImage, setSelectedImage] = useState("");

  const history = useHistory();
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((res) => res.json())
      .then((pokemonData) => {
        Promise.all(pokemonData.abilities.map((a) => fetch(a.ability.url)))
          .then((responses) => Promise.all(responses.map((res) => res.json())))
          .then((abilityData) =>
            setData({ ...pokemonData, abilities: abilityData })
            
          );
      });
  }, [id]);

  const handleAdd = () => {
    addToCart({
      img: data.sprites.other["official-artwork"].front_default,
      name: data.name,
      type: data.types[0].type.name,
      price: data.base_experience,
      quantity: 1,
    });

    history.push(`/shopping-cart`);
  };

  if (!data) {
    return <span>Loading</span>;
  }

  return (
    <DetailsLayout>
      <ImageSection
        alt={data.name}
        src={
          selectedImage || data.sprites.other["official-artwork"].front_default
        }
      />
      <ThumbnailSection
        name={data.name}
        selectedImage={selectedImage}
        handleMouseEnter={(e) => setSelectedImage(e.target.src)}
        thumbnailOneSrc={data.sprites.other["official-artwork"].front_default}
        thumbnailTwoSrc={data.sprites.other.dream_world.front_default}
        thumbnailThreeSrc={data.sprites.front_default}
        thumbnailFourSrc={data.sprites.back_default}
      />

      <MetaSection
        type={data.types[0].type.name}
        name={data.name}
        price={data.base_experience}
        stats={data.stats}
        abilities={data.abilities}
        onAddToCart={handleAdd}
      />

      <CrossSellingSection>
        {/* Exercise: Add cards with more pokemon */}
      </CrossSellingSection>
    </DetailsLayout>
  );
}
