import { useState } from "react";
import { TextField } from "@mui/material";
import { styled as muiStyled } from "@mui/material/styles";
import CustomText from "../../styled/CustomText/CustomText";
import checkCircle from "/checkCircle.svg";

const CustomTextField = ({
  label,
  value,
  onChange,
  type,
  error,
  name,
  multiline = false,
  fontSize = 14,
  checked = false,
  styles,
  color,
  fontWeight,
  maxLength = 200,
  inputProps,
  width = "420px"
}) => {
  const [isValid, setIsValid] = useState(false);

  const handleValidation = (event) => {
    const inputValue = event.target.value;
    const isValidInput = inputValue.length > 3;

    setIsValid(isValidInput);
    onChange(event);
  };

  return (
    <div style={{ position: "relative" }}>
      <StyledTextField
        style={{
          backgroundColor: "white",
          borderRadius: "10px",
          width: width,
        }}
        variant="outlined"
        label={label}
        onChange={handleValidation}
        name={name}
        value={value}
        multiline={multiline}
        sx={styles}
        maxLength={maxLength}
        inputProps={{
          ...inputProps,
          maxLength: maxLength,
          style: {
            color: color || "#383E5A",
            fontWeight: fontWeight || 700,
            fontSize: fontSize || '14px',
          },
        }}
        InputLabelProps={{
          style: {
            fontSize: fontSize,
            fontWeight: fontWeight,
            fontFamily: "Inter, sans-serif",
          },
        }}
        type={type}
        error={error}
      />
      {(checked) ? (
        <img
          draggable={false}
          src={checkCircle}
          alt="Check circle"
          style={{
            position: "absolute",
            top: "50%",
            right: 16,
            transform: "translateY(-50%)",
            color: "green",
            background: "white",
            borderRadius: "100%"
          }}
        />
      ) : (
        <CustomText
          text={"Requerido"}
          fontSize="11px"
          styles={{
            position: "absolute",
            top: "50%",
            right: 16,
            fontStyle: "italic",
            transform: "translateY(-50%)",
            color: "#C05750",
            background:'#FFF'
          }}
        />
      )}
    </div>
  );
};

export default CustomTextField;

const StyledTextField = muiStyled(TextField)(() => {
  return {
    backgroundColor: "white",
    borderRadius: "10px",
    width: "420px",
    '@media (max-width: 850px)': {
      width: `100% !important`,
    }
  };
});
