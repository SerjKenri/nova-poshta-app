import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { getNumTTN } from "../../redux/parcel/parcel-selector";
import { deleteTtn, addTtn } from "../../redux/parcel/parcel-slice";
import { getTtnInfo } from "../../redux/parcel/parcel-operation";

const Sidebar = ({ setClose }) => {
  const sidebarRef = useRef(null);
  const { t } = useTranslation();

  const dispatch = useDispatch();
  const ttnNums = useSelector(getNumTTN);

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

  const handleDelete = (ttn) => {
    dispatch(deleteTtn(ttn));
  };

  const getParcel = (ttn) => {
    dispatch(addTtn(ttn));
    dispatch(getTtnInfo(ttn));
  };

  return (
    <>
      <Container ref={sidebarRef}>
        <ContentWrapper>
          <TitleWrapper>
            <Title>{t("History")}</Title>
          </TitleWrapper>
          <HistoryList>
            {!ttnNums.length ? (
              <Item>
                <ClearHistoryText>{t("SiderStoryClear")}</ClearHistoryText>
              </Item>
            ) : (
              ttnNums.map((item) => (
                <Item key={item}>
                  <SearchButton onClick={() => getParcel(item)}>
                    {item}
                  </SearchButton>
                  <DeleteButtno onClick={() => handleDelete(item)}>
                    🗑
                  </DeleteButtno>
                </Item>
              ))
            )}
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

const ClearHistoryText = styled.p(({ theme }) => ({
  color: theme.color.mainTextColor,
}));

const ContentWrapper = styled.div(({ theme }) => ({
  padding: "20px",
}));

const SearchButton = styled.button(({ theme }) => ({
  cursor: "pointer",
  borderTop: "none",
  borderRight: "none",
  borderLeft: "none",
  borderBottom: theme.color.historyItemBorder,
  backgroundColor: "inherit",
  color: theme.color.mainTextColor,
  transition: "all 150ms ease-in-out",
  "&:hover, &:focus, &:active": {
    color: "#db1212",
    fontWeight: "800",
    borderColor: "#db1212",
  },
}));

const DeleteButtno = styled.button(({ theme }) => ({
  border: "none",
  backgroundColor: "inherit",
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
  display: "flex",
  color: theme.color.mainTextColor,
  alignItems: "center",
  justifyContent: "center",
  gap: "6px",
}));

const HistoryList = styled.ul(({ theme }) => ({
  display: "grid",
  gridGap: "8px",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  marginTop: "16px",
}));

export default Sidebar;
