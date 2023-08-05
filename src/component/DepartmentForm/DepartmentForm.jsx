import React, { useState } from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";

import Container from "../kit/Container/Container";
import Button from "../kit/Button/Button";
import DepartmentList from "../DepartmentList/DepartmentList";
import { getDepartment } from "../../redux/department/department-operation";
import { toast } from "react-toastify";

const DepartmentForm = () => {
  const [city, setCity] = useState("");

  const dispatch = useDispatch();

  const { t } = useTranslation();

  const handleSubmit = () => {
    if (city === "") {
      toast.error(t("CityCheck"));
      return;
    }
    dispatch(getDepartment({ city: city }));
  };

  return (
    <Container>
      <InputWrapper>
        <InputStyled
          value={city}
          id="city"
          onChange={(e) => setCity(e.target.value)}
          type="text"
          placeholder="City"
        />
        <BtnWrapper>
          <Button onClick={handleSubmit}>{t("BtnOffice")}</Button>
        </BtnWrapper>
      </InputWrapper>
      <DepartmentList />
    </Container>
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
  [theme.media.down(`${theme.breakpoints.s}px`)]: {
    fontSize: "14px",
    width: "300px",
    padding: "12px",
    height: "40px",
  },
}));

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
