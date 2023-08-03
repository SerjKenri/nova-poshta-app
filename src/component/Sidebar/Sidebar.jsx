import React, { useEffect, useRef } from "react";
import styled from "styled-components";

const Sidebar = ({ setClose }) => {
  const sidebarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [sidebarRef, setClose]);

  return (
    <>
      <Container ref={sidebarRef}>
        <ContentWrapper>
          <TitleWrapper>
            <Title>Історія</Title>
          </TitleWrapper>
          <HistoryList>
            <Item>0000000</Item>
            <Item>0000000</Item>
          </HistoryList>
        </ContentWrapper>
      </Container>
    </>
  );
};

const Container = styled.div(({ theme }) => ({
  position: "fixed",
  zIndex: "99",
  right: "0",
  top: "0",
  width: "300px",
  height: "100%",
  backgroundColor: theme.color.backgroundColor,
  borderLeft: theme.color.siderBorder,
  boxShadow: theme.color.siderShadow,
}));

const ContentWrapper = styled.div(({ theme }) => ({
  padding: "20px",
}));

const TitleWrapper = styled.div(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  borderBottom: theme.color.siderTitleWrapperShadow,
}));

const Title = styled.h2(({ theme }) => ({
  color: theme.color.mainTextColor,
}));

const Item = styled.li(({ theme }) => ({
  color: theme.color.mainTextColor,
}));

const HistoryList = styled.ul(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  marginTop: "16px",
}));

export default Sidebar;
