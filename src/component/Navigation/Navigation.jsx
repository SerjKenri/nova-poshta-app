import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { useSelector } from "react-redux";

import logo from "../../assets/novaPoshtaLogo.png";
import Sidebar from "../Sidebar/Sidebar";
import { HiArchive } from "react-icons/hi";
import ThemeToggler from "../ThemeToggler/ThemeToggler";
import ToggleLanguage from "../ToggleLanguage/ToggleLanguage";
import { getNumTTN } from "../../redux/parcel/parcel-selector";

const Navigation = () => {
  const [isSideOpen, setIsSideOpen] = useState(false);
  const { t } = useTranslation();
  const numTtn = useSelector(getNumTTN);

  const numLength = numTtn?.length;

  const toggleSideBar = () => {
    setIsSideOpen(!isSideOpen);
  };

  return (
    <Container>
      <MenuWrapper>
        <Logo src={logo} />
        <NavWrapper>
          <LinkNav to="/">{t("Home")}</LinkNav>
          <LinkNav to="/departament">{t("Offices")}</LinkNav>
        </NavWrapper>
      </MenuWrapper>
      <RightBtnWrapper>
        <ToggleLanguage />
        <ThemeToggler />
        <HistoryButton onClick={toggleSideBar}>
          <ArchiveIcon />
          <NumbersTtn>{numLength}</NumbersTtn>
        </HistoryButton>
      </RightBtnWrapper>
      {isSideOpen && <Sidebar setClose={toggleSideBar} />}
    </Container>
  );
};

const Container = styled.div(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: "16px 16px 16px 16px",
  borderBottom: "2px",
  boxShadow: theme.color.layoutBoxShadow,
  justifyContent: "space-between",
  backgroundColor: theme.color.backgroundColor,
}));

const NavWrapper = styled.div(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  [theme.media.down(`${theme.breakpoints.m}px`)]: {
    flexDirection: "column",
  },
}));

const NumbersTtn = styled.span(({ theme }) => ({
  position: "absolute",
  fontWeight: "800",
  color: theme.color.mainTextColor,
}));

const ArchiveIcon = styled(HiArchive)(({ theme }) => ({
  width: "30px",
  height: "30px",
  fill: "#ff0000",
  [theme.media.down(`${theme.breakpoints.s}px`)]: {
    width: "24px",
    height: "24px",
  },
}));

const MenuWrapper = styled.div(({ theme }) => ({
  display: "flex",
  alignItems: "center",
}));

const LinkNav = styled(NavLink)(({ theme }) => ({
  cursor: "pointer",
  display: "inline-block",
  textDecoration: "none",
  fontSize: "20px",
  fontWeight: "800",
  color: theme.color.mainTextColor,
  padding: "12px 8px 12px 8px",
  transition: "all 150ms ease-in-out",
  "&:hover, &:focus, &:active": {
    color: "#db1212",
  },
  [theme.media.down(`${theme.breakpoints.m}px`)]: {
    fontSize: "14px",
    padding: "0",
  },
}));

const Logo = styled.img(({ theme }) => ({
  width: "50px",
  marginRight: "20px",
  [theme.media.down(`${theme.breakpoints.s}px`)]: {
    width: "36px",
    height: "36px",
  },
}));

const HistoryButton = styled.button(({ theme }) => ({
  border: "none",
  backgroundColor: "inherit",
  padding: "0",
  cursor: "pointer",
}));

const RightBtnWrapper = styled.div(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export default Navigation;
