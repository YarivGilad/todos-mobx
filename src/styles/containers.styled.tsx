import styled from "styled-components";
import { flexbox } from "./mixins";

export const HBox = styled.div`
  ${flexbox()}
`;
export const VBox = styled.div`
  ${flexbox({ dir: "column" })}
`;
export const TVBox = styled.div`
  ${flexbox({ dir: "column", jc: "flex-start" })}
`;
export const TLVBox = styled.div`
  ${flexbox({ dir: "column", jc: "flex-start", ai: "flex-start" })}
`;
