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
  width: "700px",
  padding: "8px",
  border: "1px solid black",
  boxShadow: "0 0 5px rgba(0, 0, 0, 0.3)",
  borderRadius: "8px",
}));

const StatusText = styled.p(({ theme }) => ({
  fontSize: "18px",
}));

const SenderTitle = styled.p(({ theme }) => ({
  fontSize: "18px",
  fontWeight: "800",
}));

const SenderText = styled.span(({ theme }) => ({
  fontWeight: "400",
}));

export default ParcelData;
