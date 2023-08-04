import React from "react";
import styled from "styled-components";

const data = {
  status: "Відправлення отримано",
  senderS: "Відділення №12 (до 30 кг): вул. Університетська, 2ф/2, прим. 98",
  senderO: "Відділення №5 (до 30 кг на одне місце): вул. Набережна, 2В",
};

const ParcelData = () => {
  return (
    <Container>
      <StatusText>Статус доставки: </StatusText>
      <SenderTitle>
        Відправлено: <SenderText></SenderText>
      </SenderTitle>
      <SenderTitle>
        Отримано: <SenderText></SenderText>
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
