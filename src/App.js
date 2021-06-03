// React Imports:
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Utils Imports
import withTheme from "./theme/Theme";

// Material-UI Imports:
import "@fontsource/roboto";
import { Container, Typography } from "@material-ui/core";

// My Components, Parts, and Pages
import TopSideBars from "./components/Nav/TopSideBars";
import ContactsPage from "./pages/ContactsPage";
import HomePage from "./pages/HomePage";
import PropertiesPage from "./pages/PropertiesPage";

function App() {
  return (
    <Router>
      <div>
        <header>
          <TopSideBars />
        </header>

        <Container maxWidth="lg">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/properties" component={PropertiesPage} />
            <Route exact path="/contacts" component={ContactsPage} />
          </Switch>
        </Container>

        <footer style={{ position: "fixed", bottom: 0 }}>
          <Typography variant='h6'>This is a Footer</Typography>
        </footer>
      </div>
    </Router>
  );
}

export default withTheme(App);
