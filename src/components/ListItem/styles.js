import styled, { css } from "styled-components";

export const Text = styled.span`
  font-size: 1rem;
  font-size: 1rem;

  ${props =>
    props.title &&
    css`
      font-size: 1.6rem;
      font-weight: 700;
      line-height: 1.8;
    `}

  ${props =>
    props.genre &&
    css`
      font-size: 1.4rem;
      font-weight: 300;
    `}
`;

export const Item = styled.li`
  display: flex;
  padding: 2rem;
  background-color: white;
  flex-direction: column;
  justify-content: center;
  margin: 1rem;
  border-radius: 2px;

  :hover {
    background-color: #f2f2f2;
    opacity: 0.8;

    ${Text} {
      font-weight: 700;
    }
  }
`;
