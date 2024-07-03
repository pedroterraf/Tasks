import { Button } from "@mui/material";
import PropTypes from "prop-types";
import styled from "styled-components";

const CustomButton = ({
  text,
  styles,
  width = 230,
  backgroundColor = "#0070B9",
  color = "white",
  onClick,
  icon,
  variant = "contained",
  fontSize = "14px",
  disabled = false,
  widthMobile = "140px",
  heightMobile = "40px",
  fontSizeMobile = "11px",
  widthIcon = '20px'
}) => {
  const StyledButton = styled(Button)`
    color: ${color};
    font-size: ${fontSize};
    border-radius: 100px;
    background-color: ${backgroundColor};
    height: 51px;
    width: ${width};
    font-weight: 700;
    text-transform: none;
    line-height: normal;
    gap: 0.8rem;

    &:hover {
      background-color: ${backgroundColor === "#FFF" && "#000"};
      box-shadow: none;
    }

    @media (max-width: 850px) {
      width: ${widthMobile};
      height: ${heightMobile};
      font-size: ${fontSizeMobile};
    }

    ${styles}
  `;

  return (
    <StyledButton
      variant={variant}
      onClick={() => onClick()}
      disabled={disabled}
    >
      {text}
      {icon && <img draggable={false} src={icon} alt="File" width={widthIcon} />}
    </StyledButton>
  );
};

export default CustomButton;
