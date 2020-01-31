import React from "react";
import Header from "./components/Header.js";
import WelcomePage from "./components/WelcomePage.js";
import { Route, Link } from "react-router-dom";
import CharacterList from "./components/CharacterList";
import CharacterCard from "./components/CharacterCard.js";

function App() {
  return (
    <div>
      <main>
        <Header />
        <nav className="nav">
          <ul>
            <li>
              <Link to="/">Welcome!</Link>
            </li>
            <li>
              <Link to="/characters">Characters</Link>
            </li>
          </ul>
        </nav>

        <Route exact path="/">
          <WelcomePage />
        </Route>

        <Route exact path="/characters">
          <CharacterList />
        </Route>
      </main>
    </div>
  );
}
export default App;
