import styled from "styled-components";

export const Inner: any = styled.div`
  margin: 0 auto;
`;
export const LogoWrapper: any = styled.div`
  text-align: center;
  padding: 20px 0;
`;
export const Form: any = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  max-width: 420px;
`;

export const Input: any = styled.input`
  background: #f4f4f4;
  border: 1px solid #eeeeee;
  border-radius: 10px;
  margin: 20px 0 0;
  height: 40px;
  font-family: "Futura PT";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;
  display: flex;
  align-items: center;
  color: #262626;
  width: 100%;
  padding: 15px 13px;
  outline: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

  &::placeholder {
    font-family: "Futura PT";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 21px;
    display: flex;
    align-items: center;

    color: #6d6d6d;
  }
`;
