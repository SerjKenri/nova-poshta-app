import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

const ParcelData = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <StatusText>{t("Status")}: </StatusText>
      <SenderTitle>
        {t("Sender")}: <SenderText></SenderText>
      </SenderTitle>
      <SenderTitle>
        {t("Recipient")}: <SenderText></SenderText>
      </SenderTitle>
    </Container>
  );
};

const Container = styled.div(({ theme }) => ({
  maxWidth: "1200px",
  width: "100%",
  margin: "0 auto",
  padding: "20px",
  border: theme.color.parcelBorderColor,
  boxShadow: theme.color.parcelContainerShadow,
  borderRadius: "8px",
}));

const StatusText = styled.p(({ theme }) => ({
  fontSize: "18px",
  color: theme.color.mainTextColor,
}));

const SenderTitle = styled.p(({ theme }) => ({
  fontSize: "18px",
  fontWeight: "800",
  color: theme.color.mainTextColor,
}));

const SenderText = styled.span(({ theme }) => ({
  fontWeight: "400",
}));

export default ParcelData;
