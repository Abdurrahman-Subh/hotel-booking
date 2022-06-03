import React from "react";
import styled from "styled-components";

const MainFeatured = styled.div`
  width: 100%;
  max-width: 1024px;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  z-index: 1;
`;

const FeaturedItem = styled.div`
  position: relative;
  color: #fff;
  border-radius: 10px;
  overflow: hidden;
  height: 250px;
`;
const FeaturedImage = styled.img`
  width: 450px;
  object-fit: cover;
`;
const FeaturedTitles = styled.div`
  position: absolute;
  bottom: 20px;
  left: 10px;
  font-size: 1.3rem;
`;
const FeaturedTitleMainText = styled.h2``;
const FeaturedTitleSecondText = styled.p``;
export default function Featured() {
  return (
    <MainFeatured>
      <FeaturedItem>
        <FeaturedImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4nwfxycEbU8ZAlKDajMhgkT6O2h7e7R4L6Q&usqp=CAU" />
        <FeaturedTitles>
          <FeaturedTitleMainText>Dublin</FeaturedTitleMainText>
          <FeaturedTitleSecondText>123 prop</FeaturedTitleSecondText>
        </FeaturedTitles>
      </FeaturedItem>
      <FeaturedItem>
        <FeaturedImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4nwfxycEbU8ZAlKDajMhgkT6O2h7e7R4L6Q&usqp=CAU" />
        <FeaturedTitles>
          <FeaturedTitleMainText>Dublin</FeaturedTitleMainText>
          <FeaturedTitleSecondText>123 prop</FeaturedTitleSecondText>
        </FeaturedTitles>
      </FeaturedItem>
      <FeaturedItem>
        <FeaturedImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4nwfxycEbU8ZAlKDajMhgkT6O2h7e7R4L6Q&usqp=CAU" />
        <FeaturedTitles>
          <FeaturedTitleMainText>Dublin</FeaturedTitleMainText>
          <FeaturedTitleSecondText>123 prop</FeaturedTitleSecondText>
        </FeaturedTitles>
      </FeaturedItem>
    </MainFeatured>
  );
}
