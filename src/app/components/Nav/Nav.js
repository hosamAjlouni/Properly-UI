import { Link } from "react-router-dom";
import { StyledNav, StyledNavUl, StyledNavLi } from "./Nav.styles";
import NavItems from "./NavItems";
import NavUserItems from "./NavUserItems";

const Nav = () => {
  return (
    <StyledNav>
      <StyledNavUl>
        <StyledNavLi>
          <Link to="/">
            <strong>App</strong>
          </Link>
        </StyledNavLi>
      </StyledNavUl>

      <NavItems />

      <NavUserItems />
    </StyledNav>
  );
};

export default Nav;
