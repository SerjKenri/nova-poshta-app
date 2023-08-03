import React from "react";
import styled from "styled-components";

const Input = () => {
  return (
    <>
      <InputStyled />
    </>
  );
};

const InputStyled = styled.input(({ theme }) => ({
  display: "flex",
  width: "330px",
  padding: "16px",
  borderRadius: "8px",
  border: "1px solid #DEDEDE",
  backgroundColor: theme.color.inputBackground,
  fontSize: "16px",
  fontWeight: "600",
  color: theme.color.mainTextColor,
}));

export default Input;
