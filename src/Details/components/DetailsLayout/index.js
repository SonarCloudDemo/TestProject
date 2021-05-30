import styled from "styled-components";

const DetailsLayout = styled.div`
  box-sizing: border-box;
  padding: 24px;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  display: grid;
  grid-gap: 12px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 600px 1fr 100px;
  grid-template-areas:
    "image image meta meta"
    "thumbnails thumbnails meta meta"
    "crossselling crossselling crossselling crossselling";
`;

export { DetailsLayout };
