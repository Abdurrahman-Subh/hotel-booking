import React from "react";
import styled from "styled-components";

const MainMailList = styled.div`
  width: 100%;
  margin-top: 50px;
  background-color: #003580;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 50px;
`;
const MailTitle = styled.h1``;
const MailDesc = styled.span``;
const MailInputContainer = styled.div``;
const MailInput = styled.input`
  width: 300px;
  height: 50px;
  border: none;
  padding: 10px;
  margin-right: 10px;
  border-radius: 10px;
`;
const SubmitBtn = styled.button`
  padding: 20px 20px;
  background-color: #0071c2;
  color: #fff;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-weight: 500;
  &:hover {
    background-color: #003580;
    transition: 0.2s ease-in-out;
  }
`;

export default function MailList() {
  return (
    <MainMailList>
      <MailTitle>Save time, save money!</MailTitle>
      <MailDesc>Sign up and we'll send the best deals to you</MailDesc>
      <MailInputContainer>
        <MailInput type="text" placeholder="Your Email" />
        <SubmitBtn>Subscribe</SubmitBtn>
      </MailInputContainer>
    </MainMailList>
  );
}
