import styled from 'styled-components';

/* -------------------------------------------------------------------------- */

export const SearchBarContainer = styled.div`
  width: 100%;
  padding: 3rem 2rem;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 0.4rem;

  label {
    font-size: 1.5rem;
    font-weight: bold;
    letter-spacing: 0.2rem;
    color: gray;
  }

  input {
    margin-top: 1rem;
    display: block;
    width: 100%;
    padding: 1rem;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 0.4rem;
    outline: none;

    :focus {
      outline: 1px solid rgba(0, 0, 0, 0.4);
    }
  }
`;
