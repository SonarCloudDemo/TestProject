/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { DetailsLayout } from "./components/DetailsLayout";
import { ImageSection } from "./components/ImageSection";
import { ThumbnailSection } from "./components/ThumbnailSection";
import { MetaSection } from "./components/MetaSection";
import { Loader } from "../common/Loader";


const useData = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((res) => res.json())
      .then((pokemonData) => {
        Promise.all(pokemonData.abilities.map((a) => fetch(a.ability.url)))
          .then((responses) => Promise.all(responses.map((res) => res.json())))
          .then((abilityData) =>{
            setData({ ...pokemonData, abilities: abilityData });
            setIsLoading(false);
          });
      });
  }, [id]);
    return {
      data,
      isLoading,
      id,
    };
  };
export function Details() {
  const { data, isLoading, id } = useData();
  const [selectedImage, setSelectedImage] = useState(null);
  const history = useHistory();
  const handleRouteClick = (Id) => {
    if(Id>0){
      history.push(`/pokemon/${Id}`);
      setSelectedImage(null);
    }
  };
  if (isLoading) {
    return <Loader/>;
  }

  return (
    <DetailsLayout>
      <ImageSection
        leftClick={()=>handleRouteClick(id-1)}
        rightClick={()=>handleRouteClick(+id+1)}
        alt={data.name}
        src={selectedImage || data.sprites.other["official-artwork"].front_default
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
      />
    </DetailsLayout>
  );
}
