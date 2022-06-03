import React from "react";
import styled from "styled-components";

const MainFeaturedHotels = styled.div`
  width: 100%;
  max-width: 1024px;
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;
const FHItem = styled.div`
  flex: 1;
  gap: 10px;
  display: flex;
  flex-direction: column;
`;
const FHImage = styled.img`
  width: 100%;
  overflow: hidden;
`;
const FHName = styled.span`
  font-weight: bold;
`;
const FHCity = styled.span`
  font-weight: 300;
`;
const FHPrice = styled.span`
  font-weight: 500;
`;
const RatingSpan = styled.span`
  font-size: 14px;
`;
const Button = styled.button`
  background-color: #003580;
  color: #fff;
  border: none;
  padding: 3px;
  margin-right: 10px;
  font-weight: bold;
`;
const FHRating = styled.span``;

export default function FeaturedHotels() {
  return (
    <MainFeaturedHotels>
      <FHItem>
        <FHImage src="https://www.trthaber.com/resimler/1258000/1259672.jpg" />
        <FHName>Aparthotel Stare Miasto</FHName>
        <FHCity>Barcelona</FHCity>
        <FHPrice>Starting from $120</FHPrice>
        <FHRating>
          <Button>8.9</Button>
          <RatingSpan>Excellent</RatingSpan>
        </FHRating>
      </FHItem>
      <FHItem>
        <FHImage src="https://www.trthaber.com/resimler/1258000/1259672.jpg" />
        <FHName>Aparthotel Stare Miasto</FHName>
        <FHCity>Barcelona</FHCity>
        <FHPrice>Starting from $120</FHPrice>
        <FHRating>
          <Button>8.9</Button>
          <RatingSpan>Excellent</RatingSpan>
        </FHRating>
      </FHItem>
      <FHItem>
        <FHImage src="https://www.trthaber.com/resimler/1258000/1259672.jpg" />
        <FHName>Aparthotel Stare Miasto</FHName>
        <FHCity>Barcelona</FHCity>
        <FHPrice>Starting from $120</FHPrice>
        <FHRating>
          <Button>8.9</Button>
          <RatingSpan>Excellent</RatingSpan>
        </FHRating>
      </FHItem>
      <FHItem>
        <FHImage src="https://www.trthaber.com/resimler/1258000/1259672.jpg" />
        <FHName>Aparthotel Stare Miasto</FHName>
        <FHCity>Barcelona</FHCity>
        <FHPrice>Starting from $120</FHPrice>
        <FHRating>
          <Button>8.9</Button>
          <RatingSpan>Excellent</RatingSpan>
        </FHRating>
      </FHItem>
      <FHItem>
        <FHImage src="https://www.trthaber.com/resimler/1258000/1259672.jpg" />
        <FHName>Aparthotel Stare Miasto</FHName>
        <FHCity>Barcelona</FHCity>
        <FHPrice>Starting from $120</FHPrice>
        <FHRating>
          <Button>8.9</Button>
          <RatingSpan>Excellent</RatingSpan>
        </FHRating>
      </FHItem>
    </MainFeaturedHotels>
  );
}
