import React, { useState } from "react";
import styled from "styled-components";
import {
  faBed,
  faCalendarDays,
  faCar,
  faPerson,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import "./Header.css";
import { useNavigate } from "react-router-dom";

const MainHeader = styled.div`
  background-color: #003580;
  color: #fff;
  display: flex;
  justify-content: center;
  position: relative;
`;
const HeaderContainer = styled.div`
  width: 100%;
  max-width: 1024px;
  margin: ${(props) => (props.type ? "20px 0 100px 0" : "20px 0 0px 0")};
`;
const HeaderList = styled.div`
  display: flex;
  gap: 80px;
  margin-bottom: 50px;
`;
const HeaderListItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  &.active {
    border: 1px solid #fff;
    padding: 10px;
    border-radius: 20px;
  }
`;
const HeaderTitle = styled.h1``;
const HeaderDesc = styled.p`
  margin: 20px 0;
`;
const HeaderButton = styled.button`
  background-color: #0071c2;
  color: #fff;
  font-weight: 500;
  border: none;
  padding: 10px;
  cursor: pointer;
`;
const HeaderSearch = styled.div`
  height: 60px;
  background-color: #fff;
  border: 3px solid #febb02;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 10px 0;
  border-radius: 5px;
  position: absolute;
  bottom: -25px;
  width: 80%;
  max-width: 1024px;
`;
const HeaderSearchItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const HeaderSearchInput = styled.input`
  border: none;
  outline: none;
  font-size: 16px;
`;
const HeaderSearchText = styled.span`
  color: lightgray;
  cursor: pointer;
  font-size: 20px;
`;
const Span = styled.span``;
const Options = styled.div`
  position: absolute;
  top: 50px;
  background-color: #fff;
  color: gray;
  border-radius: 5px;
  box-shadow: 0 0 10px -5px rgba(0, 0, 0, 0.4);
  z-index: 2;
`;
const OptionItem = styled.div`
  width: 200px;
  display: flex;
  justify-content: space-between;
  padding: 12px;
`;
const OptionCounter = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: #000;
`;
const OptionText = styled.span``;
const OptionCounterButton = styled.button`
  width: 30px;
  height: 30px;
  border: 1px solid #0071c2;
  color: #0071c2;
  cursor: pointer;
  background-color: #fff;
  &:disabled {
    cursor: not-allowed;
  }
`;
const OptionCounterNumber = styled.span``;
export default function Header({ type }) {
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openDate, setOpenDate] = useState(false);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const handleOptions = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };
  const navigate = useNavigate();
  const handleSearch = () => {
    navigate("/hotels", { state: { destination, date, options } });
  };

  return (
    <MainHeader>
      <HeaderContainer>
        <HeaderList>
          <HeaderListItem className="active">
            <FontAwesomeIcon icon={faBed} />
            <Span>Stays</Span>
          </HeaderListItem>
          <HeaderListItem>
            <FontAwesomeIcon icon={faPlane} />
            <Span>Flights</Span>
          </HeaderListItem>
          <HeaderListItem>
            <FontAwesomeIcon icon={faCar} />
            <Span>Car Rentals</Span>
          </HeaderListItem>
          <HeaderListItem>
            <FontAwesomeIcon icon={faBed} />
            <Span>Attractions</Span>
          </HeaderListItem>
          <HeaderListItem>
            <FontAwesomeIcon icon={faTaxi} />
            <Span>Airport Taxis</Span>
          </HeaderListItem>
        </HeaderList>
        {type !== "list" && (
          <>
            <HeaderTitle>A liftime of discounts? It's Genius.</HeaderTitle>
            <HeaderDesc>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta
              animi vitae corporis minima. Voluptas, iusto vero minus deserunt
              corporis tempore rem unde vel ullam, quas quisquam voluptatibus
              eius temporibus et.
            </HeaderDesc>
            <HeaderButton>Sign in / Register</HeaderButton>
            <HeaderSearch>
              <HeaderSearchItem>
                <FontAwesomeIcon className="icon" icon={faBed} />
                <HeaderSearchInput
                  type="text"
                  placeholder="Where are you going"
                  onChange={(e) => setDestination(e.target.value)}
                />
              </HeaderSearchItem>
              <HeaderSearchItem>
                <FontAwesomeIcon className="icon" icon={faCalendarDays} />
                <HeaderSearchText
                  onClick={() => setOpenDate(!openDate)}
                >{`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(
                  date[0].endDate,
                  "dd/MM/yyyy"
                )} `}</HeaderSearchText>
                {openDate && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(i) => setDate([i.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    minDate={new Date()}
                    className="date"
                  />
                )}
              </HeaderSearchItem>
              <HeaderSearchItem>
                <FontAwesomeIcon className="icon" icon={faPerson} />
                <HeaderSearchText onClick={() => setOpenOptions(!openOptions)}>
                  {`${options.adult} adult . ${options.children} children . ${options.room} room`}{" "}
                </HeaderSearchText>
                {openOptions && (
                  <Options>
                    <OptionItem>
                      <OptionText>Adult</OptionText>
                      <OptionCounter>
                        <OptionCounterButton
                          disabled={options.adult <= 1}
                          onClick={() => handleOptions("adult", "d")}
                        >
                          -
                        </OptionCounterButton>
                        <OptionCounterNumber>
                          {options.adult}
                        </OptionCounterNumber>
                        <OptionCounterButton
                          onClick={() => handleOptions("adult", "i")}
                        >
                          +
                        </OptionCounterButton>
                      </OptionCounter>
                    </OptionItem>
                    <OptionItem>
                      <OptionText>Children</OptionText>
                      <OptionCounter>
                        <OptionCounterButton
                          disabled={options.children <= 0}
                          onClick={() => handleOptions("children", "d")}
                        >
                          -
                        </OptionCounterButton>
                        <OptionCounterNumber>
                          {options.children}
                        </OptionCounterNumber>
                        <OptionCounterButton
                          onClick={() => handleOptions("children", "i")}
                        >
                          +
                        </OptionCounterButton>
                      </OptionCounter>
                    </OptionItem>
                    <OptionItem>
                      <OptionText>Room</OptionText>
                      <OptionCounter>
                        <OptionCounterButton
                          disabled={options.room <= 1}
                          onClick={() => handleOptions("room", "d")}
                        >
                          -
                        </OptionCounterButton>
                        <OptionCounterNumber>
                          {options.room}
                        </OptionCounterNumber>
                        <OptionCounterButton
                          onClick={() => handleOptions("room", "i")}
                        >
                          +
                        </OptionCounterButton>
                      </OptionCounter>
                    </OptionItem>
                  </Options>
                )}
              </HeaderSearchItem>
              <HeaderSearchItem>
                <HeaderButton onClick={handleSearch}>Search</HeaderButton>
              </HeaderSearchItem>
            </HeaderSearch>
          </>
        )}
      </HeaderContainer>
    </MainHeader>
  );
}
