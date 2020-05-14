import styled from 'styled-components';

/* -------------------------------------------------------------------------- */

export const ImagesListContainer = styled.div`
  margin-top: 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 0 10px;
  grid-auto-rows: 1px;

  img {
    width: 100%;
  }
`;

export const ImagesNotFound = styled.p`
  margin-top: 1rem;
  text-align: center;
  letter-spacing: 0.1rem;
  font-size: 1.2rem;
`;
