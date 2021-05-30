import { Link, Switch } from "react-router-dom";
import { StyledNavUl, StyledNavLi } from "./Nav.styles";

const NavItems = () => {
  return (
    <Switch>
      <StyledNavUl>
        <StyledNavLi>
          <Link to="#">
            <strong>User</strong>
          </Link>
        </StyledNavLi>
      </StyledNavUl>
    </Switch>
  );
};

export default NavItems;
