import styled from "styled-components";
import colors from "../../styles/colors";

const StyledButton = styled.button`
  padding: 0.35em 0.75em;
  border: 0.1em solid #ffffff;
  margin: 0 0.3em 0.3em 0;
  border-radius: 0.25em;
  text-decoration: none;
  color: ${colors.lightFont};
  transition: all 0.3s;
  

  ${(props) =>
    (props.type === "primary" && `background-color: ${colors.blue};`) ||
    (props.type === "danger" && `background-color: ${colors.red}`)};

  &:hover {
    background-color: ${colors.charcoal};
  }
  
`;

export default StyledButton;
