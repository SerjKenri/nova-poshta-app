import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { getParcelTTN } from "../../redux/parcel/parcel-selector";

const ParcelData = ({ status, sender, recipient }) => {
  const { t } = useTranslation();
  const productInfo = useSelector(getParcelTTN);

  return (
    <Container>
      <StatusText>
        {t("Status")}: {productInfo?.Status}
      </StatusText>
      <SenderTitle>
        {t("Sender")}: <SenderText>{productInfo?.WarehouseSender}</SenderText>
      </SenderTitle>
      <SenderTitle>
        {t("Recipient")}:{" "}
        <SenderText>{productInfo?.WarehouseRecipient}</SenderText>
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
