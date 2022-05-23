import { FunctionalComponent, h } from "preact";
import { Route, Router } from "preact-router";
import Home from "../routes/home";
import Profile from "../routes/profile";
import NotFoundPage from "../routes/notfound";
import Header from "./header";
import { Container, Wrapper } from "./Container/Container";
import Albums from "../routes/albums/Albums";
import Album from "../routes/album/Album";

const App: FunctionalComponent = () => {
  return (
    <div id="preact_root">

      <Router>
        <Route path="/" component={Home} />
        <Route path="/albums" component={Albums} />
        <Route path="/album" component={Album} />

        <NotFoundPage default />
      </Router>

    </div>
  );
};

export default App;
