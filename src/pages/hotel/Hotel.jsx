import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import styled from "styled-components";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import "./hotel.css";
const HotelContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;
const HotelWrapper = styled.div`
  width: 100%;
  max-width: 1024px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: relative;
`;
const HotelTitle = styled.h1``;
const BookButton = styled.button`
  position: absolute;
  top: 10px;
  right: 0;
  border: none;
  padding: 10px 20px;
  background-color: #0071c2;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  border-radius: 5px;
`;
const HotelAddress = styled.div``;
const HotelAddressSpan = styled.span``;
const HotelDistance = styled.span`
  color: #0071c2;
  font-weight: 500;
`;
const HotelPriceHighlight = styled.span`
  color: #008009;
  font-weight: 500;
`;
const HotelImagesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const HotelImageWrapper = styled.div`
  width: 33%;
`;
const HotelImage = styled.img`
  width: 100%;
  object-fit: cover;
`;
const HotelDetails = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-top: 20px;
`;
const HotelDetailsTitle = styled.h1``;
const HotelDetailsTexts = styled.div`
  flex: 3;
`;
const HotelDesc = styled.p``;
const HotelDetailsPrices = styled.div`
  flex: 1;
  font-size: 14px;
  margin-top: 20px;
  background-color: #ebf3ff;
  display: flex;
  padding: 20px;
  flex-direction: column;
  gap: 20px;
`;
const HotelPriceTitle = styled.h1`
  font-size: 20px;
  color: #555;
`;

const HotelDetailsSpan = styled.span`
  font-size: 14px;
`;
const HotelDetailsTitle2 = styled.h2`
  font-weight: 300;
`;
const HotelPriceButton = styled.button`
  border: none;
  padding: 10px 20px;
  background-color: #0071c2;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  border-radius: 5px;
`;
const Slider = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.426);
  z-index: 999;
  display: flex;
  align-items: center;
`;
const SliderWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SliderImage = styled.img`
  width: 60%;
  height: 80vh;
`;

export default function Hotel() {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const photos = [
    {
      src: "https://media.cntraveler.com/photos/53d9b64edcd5888e14595bf4/master/w_1024,h_768,c_limit/majestic-hotel-spa-barcelona-barcelona-spain-107119-1.jpg",
    },
    {
      src: "data:image/jpeg;base64,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",
    },
    {
      src: "https://media.cntraveler.com/photos/53d9b64edcd5888e14595bf4/master/w_1024,h_768,c_limit/majestic-hotel-spa-barcelona-barcelona-spain-107119-1.jpg",
    },
    {
      src: "https://media.cntraveler.com/photos/53d9b64edcd5888e14595bf4/master/w_1024,h_768,c_limit/majestic-hotel-spa-barcelona-barcelona-spain-107119-1.jpg",
    },
    {
      src: "https://media.cntraveler.com/photos/53d9b64edcd5888e14595bf4/master/w_1024,h_768,c_limit/majestic-hotel-spa-barcelona-barcelona-spain-107119-1.jpg",
    },
    {
      src: "https://media.cntraveler.com/photos/53d9b64edcd5888e14595bf4/master/w_1024,h_768,c_limit/majestic-hotel-spa-barcelona-barcelona-spain-107119-1.jpg",
    },
  ];
  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };
  const handleMove = (direction) => {
    let newSlideNumber;
    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }
    setSlideNumber(newSlideNumber);
  };
  return (
    <>
      <Navbar />
      <Header type="list" />
      <HotelContainer>
        {open && (
          <Slider>
            <FontAwesomeIcon
              icon={faCircleXmark}
              onClick={() => setOpen(false)}
              className="closeIcon"
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="arrow"
              onClick={() => handleMove("l")}
            />
            <SliderWrapper>
              <SliderImage src={photos[slideNumber].src} />
            </SliderWrapper>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="arrow"
              onClick={() => handleMove("r")}
            />
          </Slider>
        )}
        <HotelWrapper>
          <BookButton>Reserve or Book Now!</BookButton>
          <HotelTitle>Grand Hotel</HotelTitle>
          <HotelAddress>
            <FontAwesomeIcon icon={faLocationDot} />
            <HotelAddressSpan>Elton St 125 New york</HotelAddressSpan>
          </HotelAddress>
          <HotelDistance>Excellent location - 500m from center</HotelDistance>
          <HotelPriceHighlight>
            Book a stay over $114 at this property and get a free airport taxi
          </HotelPriceHighlight>
          <HotelImagesContainer>
            {photos.map((photo, i) => (
              <HotelImageWrapper>
                <HotelImage
                  onClick={() => handleOpen(i)}
                  src={photo.src}
                  alt="hotel"
                />
              </HotelImageWrapper>
            ))}
          </HotelImagesContainer>
          <HotelDetails>
            <HotelDetailsTexts>
              <HotelDetailsTitle>
                Stay in the heart of Barcelona
              </HotelDetailsTitle>
              <HotelDesc>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum architecto ab voluptates possimus, veritatis
                reiciendis nihil modi ratione aliquid suscipit nisi quisquam
                illum alias. Culpa facere provident assumenda possimus minus!{" "}
              </HotelDesc>
            </HotelDetailsTexts>
            <HotelDetailsPrices>
              <HotelPriceTitle>Perfect for a 9-night stay!</HotelPriceTitle>
              <HotelDetailsSpan>
                Located in the real hear of Barcelona, this property has an
                excellent location score of 9.8
              </HotelDetailsSpan>
              <HotelDetailsTitle2>
                <b>$945</b> (9 nights)
              </HotelDetailsTitle2>
              <HotelPriceButton>Reserve or Book Now!</HotelPriceButton>
            </HotelDetailsPrices>
          </HotelDetails>
        </HotelWrapper>
        <MailList />
        <Footer />
      </HotelContainer>
    </>
  );
}
