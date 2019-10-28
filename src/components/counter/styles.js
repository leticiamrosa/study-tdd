import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const DisplayCounter = styled.h1`
  font-size: 4rem;
  margin: 2rem 0rem;
  color: white;

  span {
    text-decoration: underline;
    font-weight: 700;
  }
`;

export const Button = styled.button`
  padding: 1rem 2rem;
  border: 1px solid transparent;
  border-radius: 4px;

  span {
    color: white;
    font-size: 2rem;
  }

  ${props =>
    props.increment &&
    css`
      background-color: green;
    `};

  ${props =>
    props.decrement &&
    css`
      background-color: red;
    `};

  & {
    margin-left: 1rem;
  }
`;

export const ContentButton = styled.div`
  display: flex;
  margin: 1rem 0rem;
`;
