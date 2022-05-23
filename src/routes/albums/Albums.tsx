import { FunctionalComponent, h } from "preact";
import { Link } from "preact-router";
import { Button } from "../../components/Button/Button";
import { Container, Wrapper } from "../../components/Container/Container";
import { Album, Albums } from "./AlbumsStyles";

const Home: FunctionalComponent = () => {
  return (
    <Wrapper>
      <Container>
        <div>
          <Albums>
            <Link href={"/album"}>
              <Album />
            </Link>
            <Link href={"/album"}>
              <Album />
            </Link>
            <Link href={"/album"}>
              <Album />
            </Link>
            <Link href={"/album"}>
              <Album />
            </Link>
          </Albums>
          <Button type="submit" value={"create album +"}>
            create album +
          </Button>
        </div>
      </Container>
    </Wrapper>
  );
};

export default Home;
