// prettier-ignore
export interface IFlexboxParams {
  dir?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  jc?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly' | 'start' | 'end';
  ai?: 'stretch' | 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'first baseline' | 'last baseline' | 'start' | 'end' | 'self-start' | 'self-end';
  wr?: 'nowrap' | 'wrap' | 'wrap-reverse';
}
// prettier-ignore
export const flexbox = ({dir = "row",jc = "center",ai = "center", wr = "nowrap"}: IFlexboxParams = {}) => `
  display:flex;
  flex-direction:${dir};
  justify-content:${jc};
  align-items:${ai};
  flex-wrap: ${wr};
`;
