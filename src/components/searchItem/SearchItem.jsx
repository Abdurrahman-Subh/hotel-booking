import React from "react";
import styled from "styled-components";

const MainSearchItem = styled.div`
  border: 1px solid lightgray;
  display: flex;
  gap: 10px;
  padding: 10px;
  border-radius: 5px;
  justify-content: space-between;
  margin-bottom: 20px;
`;
const SIImage = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
`;
const SIDesc = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex: 2;
`;
const SITitle = styled.h1`
  font-size: 20px;
  color: #0071c2;
`;
const SIDistance = styled.span`
  font-size: 14px;
`;
const SITaxiOp = styled.span`
  font-size: 14px;
  background-color: #008009;
  color: #fff;
  width: max-content;
  padding: 3px;
  border-radius: 5px;
`;
const SISubtitle = styled.span`
  font-size: 14px;
  font-weight: bold;
`;
const SIFeatures = styled.span`
  font-size: 14px;
`;
const SICancelOp = styled.span`
  font-size: 14px;
  font-weight: bold;
  color: #008009;
`;
const SICancelOpSubtitle = styled.span`
  font-size: 14px;
  color: #008009;
`;
const SIDetails = styled.span`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Rating = styled.div`
  display: flex;
  justify-content: space-between;
`;
const RatingText = styled.span`
  font-weight: 500;
`;
const Price = styled.span`
  font-size: 24px;
`;
const TaxOp = styled.span`
  font-size: 14px;
  color: gray;
`;
const CheckButton = styled.button`
  background-color: #0071c2;
  font-weight: bold;
  padding: 10px 5px;
  border: none;
  color: #fff;
  cursor: pointer;
  border-radius: 5px;
`;
const RatingButton = styled.button`
  background-color: #003580;
  color: #fff;
  padding: 5px;
  border: none;
`;
const DetailsTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;
  gap: 5px;
`;

export default function SearchItem() {
  return (
    <MainSearchItem>
      <SIImage src="https://images.adsttc.com/media/images/50ae/4cf9/b3fc/4b27/8500/005f/large_jpg/Ricardo_Bofill_Taller_Arquitectura_Suites.jpg?1414506679" />
      <SIDesc>
        <SITitle>Tower Street Apartments</SITitle>
        <SIDistance>500M from center</SIDistance>
        <SITaxiOp>Free airport taxi</SITaxiOp>
        <SISubtitle>Studio Apartment with air conditioning</SISubtitle>
        <SIFeatures>Entire studio * 1 bathroom * 21m 1 full bed</SIFeatures>
        <SICancelOp>Free cancellation</SICancelOp>
        <SICancelOpSubtitle>
          You can cancel later, so lock in this great price today!
        </SICancelOpSubtitle>
      </SIDesc>
      <SIDetails>
        <Rating>
          <RatingText>Excellent</RatingText>
          <RatingButton>8.9</RatingButton>
        </Rating>
        <DetailsTextContainer>
          <Price>$123</Price>
          <TaxOp>Includes taxes and fees</TaxOp>
          <CheckButton>See availability</CheckButton>
        </DetailsTextContainer>
      </SIDetails>
    </MainSearchItem>
  );
}
