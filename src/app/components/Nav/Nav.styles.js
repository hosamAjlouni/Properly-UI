import styled from "styled-components";
import colors from "../../styles/colors"

export const StyledNav = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1.5em;
  color: ${colors.lightFont};
  background-color: ${colors.blue};
  height: 70px;
  line-height: 70px;
  padding: 0px 10px;
  margin: 0px;
  margin-bottom: 5px;
`;

export const StyledNavUl = styled.ul`
  margin: 0px 0px;
  display: flex;
  justify-content: space-around;
  list-style-type: none;
  padding: 0px;
`;

export const StyledNavLi = styled.li`
  margin: 0px 5px;
  & a {
    text-decoration: none;
    color: inherit;
  }
`;
