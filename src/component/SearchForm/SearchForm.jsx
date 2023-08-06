import React, { useState } from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";

import Button from "../kit/Button/Button";
import Container from "../kit/Container/Container";
import ParcelData from "../ParcelData/ParcelData";
import { getTtnInfo } from "../../redux/parcel/parcel-operation";
import { addToHitory } from "../../redux/parcel/parcel-slice";
import { getIsLoading } from "../../redux/parcel/parcel-selector";
import { toast } from "react-toastify";

const SearchForm = () => {
  const [ttn, setTtn] = useState("");
  const dispatch = useDispatch();

  const isLoading = useSelector(getIsLoading);

  const { t } = useTranslation();

  const handleSubmit = () => {
    const regex = /^\d{14}$/;
    if (ttn === "") {
      toast.error(t("TtnClearForm"));
      return;
    }

    if (regex.test(ttn)) {
      dispatch(getTtnInfo(ttn));
      dispatch(addToHitory(ttn));
    } else {
      toast.error(t("TtnCheck"));
      return;
    }
  };

  return (
    <Container>
      <InputWrapper>
        <InputStyled
          value={ttn}
          id="ttn"
          onChange={(e) => setTtn(e.target.value)}
          type="text"
          placeholder="TTN"
        />
         
        <Button disabled={isLoading} onClick={handleSubmit}>
          {t("BtnTtn")}
        </Button>
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
  [theme.media.down(`${theme.breakpoints.s}px`)]: {
    fontSize: "14px",
    width: "300px",
    padding: "12px",
    height: "40px",
  },
}));

export default SearchForm;
