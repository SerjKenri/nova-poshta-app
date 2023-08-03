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
  borderRadius: "1px",
  borderStyle: "solid",
  boxShadow: theme.color.departmentItemShadow,
}));

const Title = styled.h1(({ theme }) => ({
  display: "flex",
  fontWeight: "800",
  fontSize: "20px",
  justifyContent: "center",
  borderBottom: theme.color.departmentItemTitleBorder,
  marginBottom: "4px",
  color: theme.color.mainTextColor,
}));

const Text = styled.p(({ theme }) => ({
  fontWeight: "800",
  fontSize: "14px",
  color: theme.color.mainTextColor,
}));

const Description = styled.span(({ theme }) => ({
  fontWeight: "400",
}));

export default DepartmentItem;
