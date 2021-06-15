import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  typography: {
    fontFamily: "roboto",
  },
  palette: {
    type: "dark",
    // type: "light",
    primary: {
      light: '#757ce8',
      main: '#2196f3',
      // dark: '#002884',
      // contrastText: '#fff',
    },
    // secondary: {
    //   light: '#ff7961',
    //   main: '#f44336',
    //   // dark: '#ba000d',
    //   contrastText: '#000',
    // },
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
