import React from "react";
import styled from "styled-components";

import DepartmentItem from "../DepartmentItem/DepartmentItem";

const data = [
  { id: 1, city: "Kiyv", description: "blablablablablabla", time: "20:30" },
  { id: 2, city: "Kiyv", description: "blablablablablabla", time: "20:30" },
  { id: 3, city: "Kiyv", description: "blablablablablabla", time: "20:30" },
  { id: 4, city: "Kiyv", description: "blablablablablabla", time: "20:30" },
  { id: 5, city: "Kiyv", description: "blablablablablabla", time: "20:30" },
  { id: 6, city: "Kiyv", description: "blablablablablabla", time: "20:30" },
];

const DepartmentList = () => {
  return (
    <List>
      {data.map(({ id, city, description, time }) => (
        <DepartmentItem
          key={id}
          city={city}
          description={description}
          time={time}
        />
      ))}
    </List>
  );
};

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
  alignItems: "center",
}));

export default DepartmentList;
