import styled from "styled-components";

const DepartmentItem = ({ id, city, description, time }) => {
  return (
    <>
      <Item key={id}>
        <Title>{city}</Title>
        <Text>
          Descriptin: <Description>{description}</Description>
        </Text>
        <Text>
          Time of work: <Description>{time}</Description>
        </Text>
      </Item>
    </>
  );
};

const Item = styled.li(({ theme }) => ({
  borderRadius: "8px",
  boxShadow:
    "0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12)",
}));

const Title = styled.h1(({ theme }) => ({
  display: "flex",
  fontWeight: "800",
  fontSize: "20px",
  justifyContent: "center",
  borderBottom: "1px solid #000000",
  marginBottom: "4px",
}));

const Text = styled.p(({ theme }) => ({
  fontWeight: "800",
  fontSize: "14px",
}));

const Description = styled.span(({ theme }) => ({
  fontWeight: "400",
}));

export default DepartmentItem;
