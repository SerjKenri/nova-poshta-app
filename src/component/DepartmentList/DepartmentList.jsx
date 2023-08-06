import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import Button from "../kit/Button/Button";
import DepartmentItem from "../DepartmentItem/DepartmentItem";
import {
  getPaginOfficeList,
  getPageNum,
  isLoadingPage,
} from "../../redux/department/department-selector";
import { getDepartmentsList } from "../../redux/department/department-operation";
import { plusPage } from "../../redux/department/department-slice";

const DepartmentList = () => {
  const dispatch = useDispatch();
  const depList = useSelector(getPaginOfficeList);
  const numPage = useSelector(getPageNum);
  const isLoading = useSelector(isLoadingPage);

  const handleNextPage = () => {
    dispatch(plusPage(1));
    dispatch(
      getDepartmentsList({
        city: depList[0].CityDescription,
        num: numPage + 1,
      })
    );
  };

  return (
    <Container>
      <List>
        {!depList.length ? (
          <Item>
            <ClearHistoryText></ClearHistoryText>
          </Item>
        ) : (
          depList.map((item) => (
            <DepartmentItem key={item.Description} item={item} />
          ))
        )}
      </List>
      {!depList.length ? (
        <div></div>
      ) : (
        <BtnWrapper>
          <Button onClick={handleNextPage} disabled={isLoading}>
            Load more
          </Button>
        </BtnWrapper>
      )}
    </Container>
  );
};

const Container = styled.div(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
}));

const ClearHistoryText = styled.p(({ theme }) => ({
  color: theme.color.mainTextColor,
}));

const BtnWrapper = styled.div(({ theme }) => ({
  marginTop: "8px",
  marginBottom: "8px",
}));

const List = styled.ul(({ theme }) => ({
  display: "grid",
  maxWidth: "calc(100vw - 48px)",
  gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
  gridGap: "16px",
  marginTop: "26px",
  marginBottom: "0",
  padding: "0",
  listStyle: "none",
  marginLeft: "auto",
  marginRight: "auto",
  [theme.media.down(`${theme.breakpoints.s}px`)]: {
    maxWidth: "340px",
  },
}));

const Item = styled.li(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export default DepartmentList;
