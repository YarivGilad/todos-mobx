import styled from "styled-components";
import {
  Button as BaseButton,
  LinkButton as BaseLink
} from "../../styles/buttons.styled";
import { flexbox } from "../../styles/mixins";

export const Box = styled.footer`
  /* border: 1px solid crimson; */
  width: 100%;
  margin-top: 1rem;
  font-size: 1.4rem;
  ${flexbox({ jc: "space-evenly" })}/* font-weight: bold; */
`;

interface IButtonProps {
  selected: boolean;
}
export const Button = styled(BaseButton)<IButtonProps>`
  padding: 0.2rem 1rem;
  margin-left: 0.2rem;
  /* font-size: 1rem; */
  outline: none;
  border-radius: 0.3rem;
  border-width: 0.1rem;
  background: transparent;
  border-color: ${({ selected }) => (selected ? "deeppink" : "transparent")};
  :hover {
    border-color: ${({ selected }) => (selected ? "deeppink" : "cyan")};
  }
`;

export const LinkButton = styled(BaseLink)`
  padding-left: 2rem;
  /* margin-left: 0.2rem;*/
  font-size: 1.4rem;
`;
