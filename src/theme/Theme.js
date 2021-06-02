import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  typography: {
    fontFamily: "roboto",
  },
  palette: {
    type: "dark",
  },
});

const Theme = (props) => {
  const { children } = props;
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

const withTheme = (Component) => {
  return (props) => {
    return (
      <Theme>
        <Component {...props} />
      </Theme>
    );
  };
};

export default withTheme;
