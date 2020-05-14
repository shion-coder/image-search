import styled from 'styled-components';

/* -------------------------------------------------------------------------- */

export const ErrorContainer = styled.div`
  height: ${({ height }) => height || '100vh'};
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  a {
    font-size: 1.4rem;
    letter-spacing: 0.1rem;
    color: gray;

    :hover {
      font-weight: bold;
    }
  }

  @media screen and (max-width: 800px) {
    padding: 10px;

    a {
      font-size: 1.2rem;
    }
  }
`;

export const ErrorImage = styled.div`
  display: inline-block;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  background-size: cover;
  background-position: center;
  width: 40vh;
  height: 40vh;
`;

export const ErrorInfo = styled.div`
  color: #226fab;
  text-align: center;
`;

export const ErrorTitle = styled.h2`
  font-size: 2.5rem;
  letter-spacing: 0.3rem;
  margin-bottom: 2rem;

  @media screen and (max-width: 800px) {
    font-size: 2rem;
  }
`;

export const ErrorText = styled.p`
  font-size: 2rem;
  letter-spacing: 0.1rem;
  margin-bottom: 2rem;

  @media screen and (max-width: 800px) {
    font-size: 1.5rem;
  }
`;
