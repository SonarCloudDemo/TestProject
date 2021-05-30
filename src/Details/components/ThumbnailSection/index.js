/* eslint-disable react/prop-types */
import styled from "styled-components";

const Wrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  grid-area: thumbnails;
  margin-right: 24px;
  justify-content: space-between;
`;

const ThumbnailImage = styled.img`
  background: #efeff0;
  padding: 12px;
  height: 100%;
  border: 1px solid ${({ selected }) => (selected ? "black" : "transparent")};
  image-rendering: pixelated;
  width: calc(25% - 12px);
  box-sizing: border-box;
  object-fit: contain;
`;

const ThumbnailSection = ({
  selectedImage,
  name,
  handleMouseEnter,
  thumbnailOneSrc,
  thumbnailTwoSrc,
  thumbnailThreeSrc,
  thumbnailFourSrc,
}) => (
  <Wrapper>
    <ThumbnailImage
      selected={selectedImage === thumbnailOneSrc}
      onMouseEnter={handleMouseEnter}
      src={thumbnailOneSrc}
      alt={`${name}, Thumbnail 1`}
    />
    <ThumbnailImage
      selected={selectedImage === thumbnailTwoSrc}
      onMouseEnter={handleMouseEnter}
      src={thumbnailTwoSrc}
      alt={`${name}, Thumbnail 2`}
    />
    <ThumbnailImage
      selected={selectedImage === thumbnailThreeSrc}
      onMouseEnter={handleMouseEnter}
      src={thumbnailThreeSrc}
      alt={`${name}, Thumbnail 3`}
    />
    <ThumbnailImage
      selected={selectedImage === thumbnailFourSrc}
      onMouseEnter={handleMouseEnter}
      src={thumbnailFourSrc}
      alt={`${name}, Thumbnail 4`}
    />
  </Wrapper>
);

export { ThumbnailSection };
