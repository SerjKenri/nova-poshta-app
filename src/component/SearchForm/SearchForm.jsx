import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

import Button from "../kit/Button/Button";
import Input from "../kit/Input/Input";
import Container from "../kit/Container/Container";
import ParcelData from "../ParcelData/ParcelData";

const SearchForm = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <InputWrapper>
        <Input /> <Button>{t("BtnTtn")}</Button>
      </InputWrapper>
      <DataWrapper>
        <ParcelData />
      </DataWrapper>
    </Container>
  );
};

const InputWrapper = styled.div(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  marginTop: "16px",
  [theme.media.down(`${theme.breakpoints.m}px`)]: {
    flexDirection: "column",
    alignItems: "center",
  },
}));

const DataWrapper = styled.div(({ theme }) => ({
  marginTop: "38px",
}));

export default SearchForm;
