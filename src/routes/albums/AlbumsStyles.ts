import styled from "styled-components";

export const Albums: any = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-top: 15px;
`;
export const Album: any = styled.div`
  width: 150px;
  height: 150px;
  border: 1px solid black;
  margin-bottom: 20px;
  border-radius: 20px;

  &:hover {
    background-color: rgba(239, 239, 239, 0.62);
  }
`;
