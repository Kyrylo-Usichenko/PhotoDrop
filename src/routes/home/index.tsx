import { FunctionalComponent, h } from "preact";
import { Inner, Form, LogoWrapper, Input } from "./HomeStyles";
import Logo from "../../components/Logo/Logo";
import { Link } from "preact-router/match";
import { Button } from "../../components/Button/Button";
import { Container, Wrapper } from "../../components/Container/Container";

const Home: FunctionalComponent = () => {
  return (
    <Wrapper>
      <Container>
        <Inner>
          <LogoWrapper>
            <Link href="/">
              <Logo />
            </Link>
          </LogoWrapper>
          <Form>
            <Input placeholder="Login" type="email" />
            <Input placeholder="Password" type="password" />
            <Link style={{ width: "100%" }} href={"/albums"}>
              <Button type="submit" />
            </Link>
          </Form>
        </Inner>
      </Container>
    </Wrapper>
  );
};

export default Home;
