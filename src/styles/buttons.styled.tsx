import styled from "styled-components";

export const Button = styled.button`
  padding: 1rem 2rem;
  text-transform: capitalize;
  /* font-size:inherit */
  cursor: pointer;
`;
export const LinkButton = styled.a`
  padding: 1rem 2rem;
  /* text-transform: capitalize; */
  /* font-size:inherit */
  text-decoration: none;
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
`;
