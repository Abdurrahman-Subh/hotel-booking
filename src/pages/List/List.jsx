import React, { useState } from "react";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "../../components/searchItem/SearchItem";

const ListContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;
const ListWrapper = styled.div`
  width: 100%;
  max-width: 1024px;
  display: flex;
`;
const ListSearch = styled.div`
  flex: 1;
  background-color: #febb02;
  padding: 10px;
  position: sticky;
  border-radius: 10px;
  top: 10px;
  height: max-content;
`;
const ListResults = styled.div`
  flex: 3;
`;
const SearchTitle = styled.h1`
  font-size: 20px;
  color: gray;
  margin-bottom: 10px;
`;

const ListSearchItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-bottom: 10px;
`;
const LSILabel = styled.label`
  font-size: 12px;
`;
const LSIInput = styled.input`
  border: none;
  height: 30px;
  padding: 5px;
`;
const LSISpan = styled.span`
  height: 30px;
  padding: 5px;
  background-color: #fff;
  display: flex;
  align-items: center;
  cursor: pointer;
`;
const LSIOptionItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  color: #555;
  font-size: 16px;
`;
const LSIOptionText = styled.span``;
const OptionsInput = styled.input`
  width: 50px;
`;
const ListItemOptions = styled.div`
  padding: 10px;
`;
const SearchButton = styled.button`
  background-color: #0071c2;
  padding: 10px;
  color: #fff;
  border: none;
  width: 100%;
  font-weight: 500;
  cursor: pointer;
`;
export default function List() {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options);

  return (
    <>
      <Navbar />
      <Header type="list" />
      <ListContainer>
        <ListWrapper>
          <ListSearch>
            <SearchTitle>Search</SearchTitle>
            <ListSearchItem>
              <LSILabel>Description</LSILabel>
              <LSIInput placeholder={destination} />
            </ListSearchItem>
            <ListSearchItem>
              <LSILabel>Check-in date</LSILabel>
              <LSISpan onClick={() => setOpenDate(!openDate)}>
                {`${format(date[0].startDate, "MMM dd, yyyy")} to ${format(
                  date[0].endDate,
                  "MMM dd, yyyy"
                )}`}
              </LSISpan>
              {openDate && (
                <DateRange
                  onChange={(value) => setDate([value.selection])}
                  minDate={new Date()}
                  ranges={date}
                />
              )}
            </ListSearchItem>
            <ListSearchItem>
              <LSILabel>Options</LSILabel>
              <ListItemOptions>
                <LSIOptionItem>
                  <LSIOptionText>
                    Min price <small>per night</small>
                  </LSIOptionText>
                  <OptionsInput type="number" />
                </LSIOptionItem>
                <LSIOptionItem>
                  <LSIOptionText>
                    Max price <small>per night</small>
                  </LSIOptionText>
                  <OptionsInput type="number" />
                </LSIOptionItem>
                <LSIOptionItem>
                  <LSIOptionText>Adult</LSIOptionText>
                  <OptionsInput
                    type="number"
                    min={1}
                    placeholder={options.adult}
                  />
                </LSIOptionItem>
                <LSIOptionItem>
                  <LSIOptionText>Children</LSIOptionText>
                  <OptionsInput
                    min={0}
                    type="number"
                    placeholder={options.children}
                  />
                </LSIOptionItem>
                <LSIOptionItem>
                  <LSIOptionText>Room</LSIOptionText>
                  <OptionsInput
                    min={1}
                    type="number"
                    placeholder={options.room}
                  />
                </LSIOptionItem>
              </ListItemOptions>
            </ListSearchItem>
            <SearchButton>Search</SearchButton>
          </ListSearch>
          <ListResults>
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
          </ListResults>
        </ListWrapper>
      </ListContainer>
    </>
  );
}
