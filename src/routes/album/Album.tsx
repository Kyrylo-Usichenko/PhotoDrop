import { FunctionalComponent, h } from "preact";
import { Button } from "../../components/Button/Button";
import { Back, Inner, Name, Nav, Photo, Photos } from "./AlbumStyles";
import { Wrapper } from "../../components/Container/Container";
import { Link } from "preact-router";

const Home: FunctionalComponent = () => {
  return (
    <Wrapper>
      <Inner>
        <Nav>
          <Back>
            <Link href={"/albums"}>back</Link>
          </Back>
          <Name>album name</Name>
        </Nav>
        <Photos>
          <Photo></Photo>
          <Photo></Photo>
          <Photo></Photo>
          <Photo></Photo>
          <Photo></Photo>
          <Photo></Photo>
        </Photos>
        <Button type={"submit"} value="add photos">
          add photos
        </Button>
      </Inner>
    </Wrapper>
  );
};

export default Home;
