// React and Redux Imports:
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

// Material-UI Imports:
import "@fontsource/roboto";
import { Container } from "@material-ui/core";

// My Components, Parts, and Pages
import NavBars from "./components/Common/Nav/navBars";
import ContactsPage from "./pages/ContactsPage";
import HomePage from "./pages/HomePage";
import PropertiesPage from "./pages/PropertiesPage";
import Alert from "./components/Common/alert/Alert";

import useFetchProperties from "api/properties/useFetchProperties";
import useFetchUnits from "api/units/useFetchUnits";
import useFetchLeases from "api/leases/useFetchLeases";

const mapStateToProps = (state) => {
  return {
    properties: state.properties,
    units: state.units,
    leases: state.leases,
    // state: state,
  };
};

function App({
  // state,
  properties,
  units,
  leases,
}) {
  useFetchLeases(leases.fetchRequired);
  useFetchUnits(units.fetchRequired);
  useFetchProperties(properties.fetchRequired);
  // console.log(state)
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

export default connect(mapStateToProps)(App);
