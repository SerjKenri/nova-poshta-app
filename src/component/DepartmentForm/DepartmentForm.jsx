import React from "react";
import styled from "styled-components";

import Container from "../kit/Container/Container";
import Button from "../kit/Button/Button";
import Input from "../kit/Input/Input";
import DepartmentList from "../DepartmentList/DepartmentList";

const DepartmentForm = () => {
  return (
    <Container>
      <InputWrapper>
        <Input />
        <BtnWrapper>
          <Button>Шукати відділення</Button>
        </BtnWrapper>
      </InputWrapper>
      <DepartmentList />
    </Container>
  );
};

const InputWrapper = styled.div(({ theme }) => ({
  display: "flex",
  marginTop: "16px",
  justifyContent: "center",
  [theme.media.down(`${theme.breakpoints.m}px`)]: {
    flexDirection: "column",
    alignItems: "center",
  },
}));

const BtnWrapper = styled.div(({ theme }) => ({
  marginLeft: "4px",
  [theme.media.down(`${theme.breakpoints.m}px`)]: {
    marginTop: "24px",
  },
}));

export default DepartmentForm;
