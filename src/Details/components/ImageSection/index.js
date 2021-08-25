/* eslint-disable react/prop-types */
import styled from "styled-components";

const ProductImage = styled.img`
  max-width: 100%;
  object-fit: contain;
  image-rendering: pixelated;
`;

const Wrapper = styled.section`
  box-sizing: border-box;
  display: flex;
  background: #efeff0;
  grid-area: image;
  padding: 12px;
  margin-right: 24px;
`;

const ImageSection = ({ alt, src }) => (
  <>
    <Wrapper>
      <ProductImage alt={alt} src={src} />
    </Wrapper>
  </>
);
export { ImageSection };
