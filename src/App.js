// React Imports:
import { Route, Switch } from "react-router-dom";
import { useState } from "react";

// Utils Imports
import withTheme from "./theme/Theme";

// Material-UI Imports:
import "@fontsource/roboto";
import { Container } from "@material-ui/core";

// My Components, Parts, and Pages
import TopSideBars from "./components/Nav/navBars";
import ContactsPage from "./pages/ContactsPage";
import HomePage from "./pages/HomePage";
import PropertiesPage from "./pages/PropertiesPage";
import Alert from "./common/alert/Alert";

function App() {
  const [alert, setAlert] = useState({
    alertType: "",
    alertText: "",
  });

  return (
      <div>
        <header>
          <TopSideBars />
        </header>

        <Container maxWidth="lg">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/properties">
              <PropertiesPage setAlert={setAlert} />
            </Route>
            <Route exact path="/contacts" component={ContactsPage} />
          </Switch>
        </Container>

        <Alert alert={alert} setAlert={setAlert} />

        {/* <footer style={{ position: "fixed", bottom: 0 }}>
          <Typography variant="h6">This is a Footer</Typography>
        </footer> */}
      </div>
  );
}

export default withTheme(App);
