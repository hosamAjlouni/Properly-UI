// React Imports:
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Utils Imports
import withTheme from "./theme/Theme";

// Material-UI Imports:
import "@fontsource/roboto";
import { Container } from "@material-ui/core";

// My Components, Parts, and Pages
import TopSideBars from "./components/Nav/TopSideBars";
import ContactsPage from "./pages/ContactsPage";
import HomePage from "./pages/HomePage";
import PropertiesPage from "./pages/PropertiesPage";

function App() {
  return (
    <Router>
      <div >
        <header>
          <TopSideBars />
        </header>

        <Container maxWidth="lg">
          <Switch>
            <Route exact path="/home" component={HomePage} />
            <Route exact path="/" />
            <Route exact path="/properties" component={PropertiesPage} />
            <Route exact path="/contacts" component={ContactsPage} />
          </Switch>
        </Container>

        <footer style={{ position: "fixed", bottom: 0 }}>
          This is a Footer
        </footer>
      </div>
    </Router>
  );
}

export default withTheme(App);
