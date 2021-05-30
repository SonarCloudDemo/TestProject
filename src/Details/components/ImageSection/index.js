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
const ArrowLeft = styled.i`
  align-self: center;
  border: solid gray;
  border-width: 0 10px 10px 0;
  display: inline-block;
  padding: 10px;
    transform: rotate(135deg);
    -webkit-transform: rotate(135deg);
    caret-color: transparent;
    &:hover{
        border-color: black;
    }
`;
const ArrowRight = styled.i`
  align-self: center;
  border: solid gray;
  border-width: 0 10px 10px 0;
  display: inline-block;
  padding: 10px;
    transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
    caret-color: transparent;
    &:hover{
        border-color: black;
    }
`;
const ImageSection = ({ alt, src, leftClick, rightClick }) => (
  <>
    <Wrapper>
      <ArrowLeft onClick={leftClick}/>
      <ProductImage alt={alt} src={src} />
      <ArrowRight onClick={rightClick}/>
    </Wrapper>
  </>
);
export { ImageSection };
