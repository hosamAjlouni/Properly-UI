import StyledButton from "./Button.style";

const Button = ({ label, onClick, type }) => {
  return (
    <StyledButton type={type} onClick={onClick} >
      {label}
    </StyledButton>
  );
};

export default Button;
