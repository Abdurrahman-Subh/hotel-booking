import React from "react";
import styles from "styled-components";
import Featured from "../../components/featured/Featured";
import PropertyList from "../../components/propertyList/PropertyList";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import styled from "styled-components";
import FeaturedHotels from "../../components/featuredHotels/FeaturedHotels";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";

const HomeContainer = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;
const Title = styled.h1`
  font-weight: 800;
  width: 1024px;
  font-size: 20px;
`;
export default function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <HomeContainer>
        <Featured />
        <Title>Browse by property type</Title>
        <PropertyList />
        <Title>Home guests love</Title>
        <FeaturedHotels />
        <MailList />
      </HomeContainer>
      <Footer />
    </div>
  );
}
