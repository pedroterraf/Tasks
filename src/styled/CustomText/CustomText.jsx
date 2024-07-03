import { Typography } from "@mui/material";

const CustomText = ({ 
  letterSpacingMobile = '1px', 
  fontSizeMobile = "12px", 
  fontWeightMobile = 700, 
  textAlignMobile='left',
  fontFamily="Open Sans",
  textAlign='left',
  text="", 
  styles, 
  fontSize = "14px", 
  color = "#383E5A",
  fontWeight = 700 ,
  display = 'flex', 
  alignItems = 'center', 
  ...otherProps 
}) => {
  const props = {
    display: display,
    alignItems: alignItems,
    color: color,
    fontSize: fontSize,
    fontStyle: "normal",
    fontWeight: fontWeight,
    letterSpacing: "1px",
    textAlign: textAlign,
    fontFamily: fontFamily,
    wordBreak: 'break-word', // Las palabras largas se dividan para ajustarse al ancho
    ...styles,
    '@media (max-width: 850px)': {
      fontSize: fontSizeMobile,
      fontWeight: fontWeightMobile,
      textAlign: textAlignMobile,
      letterSpacing: letterSpacingMobile,
    }
  };
  return (
    <Typography sx={props} {...otherProps}>
      {text}
    </Typography>
  );
};

export default CustomText;
