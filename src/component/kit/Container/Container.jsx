import React from "react";
import styled from "styled-components";

const Container = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.div(({ theme }) => ({
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "start",
  marginTop: "16px",
  position: "fixed",
  top: "72px",
  left: "0",
  right: "0",
  bottom: "0",
  backgroundColor: theme.color.backgroundColor,
}));

export default Container;
