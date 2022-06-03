import React from "react";
import styled from "styled-components";

const MainFooter = styled.div`
  width: 100%;
  max-width: 1024px;
  font-size: 12px;
  margin-left: auto;
  margin-right: auto;
`;
const FLists = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 50px;
`;
const FList = styled.ul`
  list-style: none;
  padding: 0;
`;
const FListItem = styled.li`
  margin-bottom: 10px;
  cursor: pointer;
  color: #003580;
`;
const FText = styled.div``;

export default function Footer() {
  return (
    <MainFooter>
      <FLists>
        <FList>
          <FListItem>Countries</FListItem>
          <FListItem>Regions</FListItem>
          <FListItem>Cities</FListItem>
          <FListItem>Districts</FListItem>
          <FListItem>Airports</FListItem>
          <FListItem>Hotels</FListItem>
        </FList>
        <FList>
          <FListItem>Countries</FListItem>
          <FListItem>Regions</FListItem>
          <FListItem>Cities</FListItem>
          <FListItem>Districts</FListItem>
          <FListItem>Airports</FListItem>
          <FListItem>Hotels</FListItem>
        </FList>
        <FList>
          <FListItem>Countries</FListItem>
          <FListItem>Regions</FListItem>
          <FListItem>Cities</FListItem>
          <FListItem>Districts</FListItem>
          <FListItem>Airports</FListItem>
          <FListItem>Hotels</FListItem>
        </FList>
        <FList>
          <FListItem>Countries</FListItem>
          <FListItem>Regions</FListItem>
          <FListItem>Cities</FListItem>
          <FListItem>Districts</FListItem>
          <FListItem>Airports</FListItem>
          <FListItem>Hotels</FListItem>
        </FList>
        <FList>
          <FListItem>Countries</FListItem>
          <FListItem>Regions</FListItem>
          <FListItem>Cities</FListItem>
          <FListItem>Districts</FListItem>
          <FListItem>Airports</FListItem>
          <FListItem>Hotels</FListItem>
        </FList>
      </FLists>
      <FText>Copyright © 2022 AbdurrahmanBooking.</FText>
    </MainFooter>
  );
}
