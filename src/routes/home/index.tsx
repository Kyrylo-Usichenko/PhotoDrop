import { FunctionalComponent, h } from "preact";
import {
  LogoWrapper,
  SignUp,
  Form,
  FormInner,
  CountryWrapper,
  Number,
  Flag,
  ArrowWrapper,
} from "./HomeStyles";
import Logo from "../../components/Logo/Logo";
import { Container } from "../../components/Container/Container";
import ArrowDown from "../../components/ArrowDown/ArrowDown";

const Home: FunctionalComponent = () => {
  return (
    <Container>
      <LogoWrapper>
        <Logo />
      </LogoWrapper>
      <SignUp>Sign up</SignUp>
      <Form>
        <FormInner>
          <CountryWrapper>
            <Flag />
            <ArrowWrapper>
              <ArrowDown />
            </ArrowWrapper>
          </CountryWrapper>
          <Number type="number" />
        </FormInner>
        <button>Create account</button>
      </Form>
    </Container>
  );
};

export default Home;
