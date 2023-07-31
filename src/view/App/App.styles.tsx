import styled from "styled-components";
import { TVBox, TLVBox } from "../../styles/containers.styled";
import { flexbox } from "../../styles/mixins";

export const Container = styled(TVBox)`
  /* border: solid 2px deeppink; */
  background: papayawhip;
  height: 100%;
  padding-top: 2rem;
  h1 {
    margin: 1rem;
    font-weight: 500;
  }
`;

export const ListBox = styled(TLVBox)`
  /* border: solid 1px cyan; */
  border-radius: 0.8rem;
  background: white;
  padding: 1.5rem;
  box-shadow: 0rem 2rem 4rem rgba(0, 0, 0, 0.3);
  min-width: 50vw;
  line-height: 2.8rem;
  font-size: 2.4rem;
  font-weight: 300;

  ul {
    /* border: solid 2px deeppink; */
    width: 100%;
    margin-top: 1rem;
    ${flexbox({ dir: "column", ai: "stretch" })};
  }
`;
