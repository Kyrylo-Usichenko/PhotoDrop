import { FunctionalComponent, h } from "preact";
import styled from "styled-components";

const Logo: FunctionalComponent = () => {
  return <Img src="./../../assets/icons/logo.svg" alt="logo" />;
};

const Img = styled.img`
  cursor: pointer;
`;

export default Logo;
