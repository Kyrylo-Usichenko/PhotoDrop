import styled from "styled-components";

export const Inner: any = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Photos: any = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
export const Photo: any = styled.div`
  width: 115px;
  height: 150px;
  border: 1px solid black;
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  &:focus {
    outline: none;
  }
`;
export const Nav: any = styled.div`
  position: relative;
  width: 100%;
  text-align: center;
`;
export const Back: any = styled.div`
  position: absolute;
  left: 0;
`;

export const Name: any = styled.div``;
