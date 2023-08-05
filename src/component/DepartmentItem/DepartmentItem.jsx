import styled from "styled-components";
import { useTranslation } from "react-i18next";

const DepartmentItem = ({ item }) => {
  const { t } = useTranslation();

  return (
    <>
      <Item>
        <Title>{item.CityDescription}</Title>
        <Text>
          {t("Address")}: <Description>{item.Description}</Description>
        </Text>
        <Text>
          {t("WorkTime")}:{" "}
          <Description>
            {t("Sunday")}: {item.Delivery.Sunday}/ {t("Monday")}:
            {item.Delivery.Monday}/ {t("Tuesday")}: {item.Delivery.Tuesday}/{" "}
            {t("Wednesday")}:{item.Delivery.Wednesday}/ {t("Thursday")}:{" "}
            {item.Delivery.Thursday}/ {t("Friday")}:{item.Delivery.Friday}/{" "}
            {t("Saturday")}: {item.Delivery.Saturday}
          </Description>
        </Text>
      </Item>
    </>
  );
};

const Item = styled.li(({ theme }) => ({
  borderRadius: "1px",
  borderStyle: "solid",
  padding: "6px",
  boxShadow: theme.color.departmentItemShadow,
  [theme.media.down(`${theme.breakpoints.s}px`)]: {
    maxWidth: "340px",
  },
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
