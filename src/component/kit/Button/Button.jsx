import React from "react";
import styled from "styled-components";

const Button = ({ children }) => {
  return <StyledBtn type="submit">{children}</StyledBtn>;
};

const StyledBtn = styled.button(({ theme }) => ({
  boxSizing: "border-box",
  WebkitAppearance: "none",
  width: "250px",
  MozAppearance: "none",
  appearance: "none",
  backgroundColor: "transparent",
  border: "2px splod #E74C3C",
  borderRadius: "0.6em",
  cursor: "pointer",
  display: "-ms-flexbox",
  alignSelf: "center",
  alignItems: "center",
  fontSize: "0.8rem",
  fontWeight: "700",
  lineHeight: "1",
  padding: "1.5em 1.8em",
  textDecoration: "none",
  textAlign: "center",
  textTransform: "uppercase",
  borderColor: "#db1212",
  color: "rgb(255, 255, 255)",
  boxShadow: "0 0 40px 40px #db1212 inset, 0 0 0 0 #db1212",
  transition: "all 150ms ease-in-out",
  "&:hover, &:focus, &:active": {
    color: "#db1212",
    boxShadow: "0 0 10px 0 #db1212 inset, 0 0 10px 4px #db1212",
  },
}));

export default Button;
