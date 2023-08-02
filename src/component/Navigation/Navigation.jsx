import { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import logo from "../../assets/novaPoshtaLogo.png";
import Sidebar from "../Sidebar/Sidebar";
import { HiArchive } from "react-icons/hi";

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
      <div>
        <HistoryButton onClick={toggleSideBar}>
          <HiArchive style={{ width: "30px", height: "30px" }} />
        </HistoryButton>
      </div>
      {isSideOpen && <Sidebar setClose={toggleSideBar} />}
    </Container>
  );
};

const Container = styled.div(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: "16px 16px 16px 16px",
  borderBottom: "2px",
  borderBottomStyle: "solid",
  borderColor: "#000000",
  boxShadow: "0px 5px 3px rgba(0, 0, 0, 0.1)",
  justifyContent: "space-between",
}));

const MenuWrapper = styled.div(({ theme }) => ({
  display: "flex",
}));

const LinkNav = styled(NavLink)(({ theme }) => ({
  display: "inline-block",
  textDecoration: "none",
  fontSize: "20px",
  fontWeight: "800",
  color: "#2a363b",
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

export default Navigation;
