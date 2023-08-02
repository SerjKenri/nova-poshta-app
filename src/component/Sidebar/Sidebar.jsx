import React, { useEffect, useRef } from "react";
import styled from "styled-components";

import { HiOutlineX } from "react-icons/hi";

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
            <h2>Історія</h2>
            <CloseBtn onClick={setClose}>
              <HiOutlineX />
            </CloseBtn>
          </TitleWrapper>
          <HistoryList>
            <li>0000000</li>
            <li>0000000</li>
          </HistoryList>
        </ContentWrapper>
      </Container>
    </>
  );
};

const Container = styled.div(({ theme }) => ({
  position: "fixed",
  right: "0",
  top: "0",
  width: "300px",
  height: "100%",
  background: "#FFFFFF",
  borderLeft: "1px solid #000000",
  boxShadow: "-10px 0 10px rgba(0, 0, 0, 0.5)",
}));

const ContentWrapper = styled.div(({ theme }) => ({
  padding: "20px",
}));

const TitleWrapper = styled.div(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  borderBottom: "1px solid #000000",
}));

const CloseBtn = styled.button(({ theme }) => ({
  position: "absolute",
  border: "none",
  backgroundColor: "#FFFFFF",
  left: "10px",
  top: "10px",
}));

const HistoryList = styled.ul(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  marginTop: "16px",
}));

export default Sidebar;
