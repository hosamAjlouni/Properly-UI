// React Imports:
import { Route, Switch } from "react-router-dom";

// Material-UI Imports:
import "@fontsource/roboto";
import { Container } from "@material-ui/core";

// My Components, Parts, and Pages
import NavBars from "./components/common/Nav/navBars";
import ContactsPage from "./pages/ContactsPage";
import HomePage from "./pages/HomePage";
import PropertiesPage from "./pages/PropertiesPage";
import Alert from "./components/common/alert/Alert";

function App() {
  return (
    <div>
      <header>
        <NavBars />
      </header>

      <Container maxWidth="lg">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/properties" component={PropertiesPage} />
          <Route exact path="/contacts" component={ContactsPage} />
        </Switch>
      </Container>

      <Alert />

      {/* <footer style={{ position: "fixed", bottom: 0 }}>
        <Typography variant="h6">This is a Footer</Typography>
      </footer> */}
    </div>
  );
}

export default App;
