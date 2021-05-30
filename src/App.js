import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GlobalStyle from "./app/styles/GlobalStyle";
import Nav from "./app/components/Nav/Nav";
import Home from "./app/pages/Home";
import Contacts from "./app/pages/Contacts";
import Properties from "./app/pages/Properties";

function App() {
  return (
    <Router>
      <div className="App">
        <GlobalStyle />

        <Nav />

        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/2" component={Properties} />
          <Route exact path="/3" component={Contacts} />
        </Switch>

        <footer style={{ position: "fixed", bottom: 0 }}>
          This is a Footer
        </footer>
      </div>
    </Router>
  );
}

export default App;
