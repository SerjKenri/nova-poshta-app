import { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import logo from "../../assets/novaPoshtaLogo.png";
import Sidebar from "../Sidebar/Sidebar";
import { HiArchive } from "react-icons/hi";
import ThemeToggler from "../ThemeToggler/ThemeToggler";

const screen = [
  { name: "Home", link: "/" },
  { name: "Offices", link: "/departament" },
];

const Navigation = () => {
  const [isSideOpen, setIsSideOpen] = useState(false);

  const toggleSideBar = () => {
    setIsSideOpen(!isSideOpen);
  };

  return (
    <Container>
      <MenuWrapper>
        <Logo src={logo} />
        {screen.map(({ name, link }) => (
          <LinkNav key={name} to={link}>
            {name}
          </LinkNav>
        ))}
      </MenuWrapper>
      <RightBtnWrapper>
        <ThemeToggler />
        <HistoryButton onClick={toggleSideBar}>
          <HiArchive
            style={{ width: "30px", height: "30px", fill: "#ff0000" }}
          />
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

const MenuWrapper = styled.div(({ theme }) => ({
  display: "flex",
}));

const LinkNav = styled(NavLink)(({ theme }) => ({
  display: "inline-block",
  textDecoration: "none",
  fontSize: "20px",
  fontWeight: "800",
  color: theme.color.mainTextColor,
  padding: "12px 8px 12px 8px",
}));

const Logo = styled.img(({ theme }) => ({
  width: "50px",
  marginRight: "20px",
}));

const HistoryButton = styled.button(({ theme }) => ({
  border: "none",
  backgroundColor: "inherit",
  padding: "0",
}));

const RightBtnWrapper = styled.div(({ theme }) => ({
  display: "flex",
}));

export default Navigation;
