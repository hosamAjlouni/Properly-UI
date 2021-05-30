import { Link, Switch } from "react-router-dom";
import { StyledNavUl, StyledNavLi } from "./Nav.styles";

const NavItems = () => {
  return (
    <Switch>
      <StyledNavUl>
        <StyledNavLi>
          <Link to="/home">Home</Link>
        </StyledNavLi>
        <StyledNavLi>
          <Link to="/2">Properties</Link>
        </StyledNavLi>
        <StyledNavLi>
          <Link to="/3">Contacts</Link>
        </StyledNavLi>
      </StyledNavUl>
    </Switch>
  );
};

export default NavItems;
