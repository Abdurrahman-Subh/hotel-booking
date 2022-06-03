import React from "react";
import styled from "styled-components";

const PList = styled.div`
  width: 100%;
  max-width: 1024px;
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;

const PListItem = styled.div`
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  flex: 1;
`;
const PListImg = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
`;
const PListTitles = styled.div``;
const PListH1 = styled.h1`
  font-size: 18px;
`;
const PListH2 = styled.h2`
  font-size: 14px;
  font-weight: 300;
  color: gray;
`;

export default function propertyList() {
  return (
    <PList>
      <PListItem>
        <PListImg src="https://www.trthaber.com/resimler/1258000/1259672.jpg" />
        <PListTitles>
          <PListH1>Hotels</PListH1>
          <PListH2>233 hotels</PListH2>
        </PListTitles>
      </PListItem>
      <PListItem>
        <PListImg src="https://www.trthaber.com/resimler/1258000/1259672.jpg" />
        <PListTitles>
          <PListH1>Hotels</PListH1>
          <PListH2>233 hotels</PListH2>
        </PListTitles>
      </PListItem>
      <PListItem>
        <PListImg src="https://www.trthaber.com/resimler/1258000/1259672.jpg" />
        <PListTitles>
          <PListH1>Hotels</PListH1>
          <PListH2>233 hotels</PListH2>
        </PListTitles>
      </PListItem>
    </PList>
  );
}
