import { FunctionalComponent, h } from "preact";
import { Button } from "../../components/Button/Button";

const Home: FunctionalComponent = () => {
  return (
    <div>
      <Button type="submit" value={"create album +"}>
        create album +
      </Button>
    </div>
  );
};

export default Home;
