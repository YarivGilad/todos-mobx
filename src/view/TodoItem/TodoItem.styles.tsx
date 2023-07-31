import styled from "styled-components";
import {
  RiCheckboxBlankCircleLine,
  RiCheckboxCircleLine
} from "react-icons/ri";
import { TiDeleteOutline } from "react-icons/ti";
import { flexbox } from "../../styles/mixins";

export const Check = styled(RiCheckboxCircleLine)`
  cursor: pointer;
  color: green;
`;
export const Uncheck = styled(RiCheckboxBlankCircleLine)`
  cursor: pointer;
  color: gray;
`;
export const Remove = styled(TiDeleteOutline)`
  cursor: pointer;
  color: red;
  /* visibility: hidden; */
`;


type TodoItemProps = {
  $completed: boolean;
}
export const TodoTitle = styled.span<TodoItemProps>`
  flex: 1;
  padding-left: 1rem;
  padding-bottom: 0.4rem;
  text-decoration: ${({ $completed }) =>
    $completed === true ? "line-through" : "none"};
  color: ${({ $completed }) =>  $completed ? "grey" : "black" };
`;

export const TodoItemBox = styled.li`
  ${flexbox()};
  /* border: deeppink 1px dashed; */
  width: 100%;
  border-bottom: solid lightgrey 1px;
  padding: 0.5rem 2rem;
  .removeIcon{
    /* visibility: hidden; */
    /* display: none; */
  }
  :hover{
    .removeIcon{
      /* visibility: visible; */
      display: block;
    }
  }
`;
