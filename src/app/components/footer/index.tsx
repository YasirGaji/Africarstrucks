/* eslint-disable jsx-a11y/anchor-is-valid */
import { faMailBulk, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
  FooterContainer,
  AboutContainer,
  TextLogo,
  InnerContainer,
  AboutText,
  LinksList,
  HeaderTitle,
  SectionContainer,
  ListItem,
  HorizontalContainer,
  Icon,
  SmallText
} from "./styles/footer";

export function Footer() {
  return (
    <FooterContainer>
      <InnerContainer>
        <AboutContainer>
          <TextLogo>Africarstrucks.</TextLogo>

          <AboutText>Rent, Hire, and Buy Trucks Anywhere Across Africa.</AboutText>
        </AboutContainer>

        <SectionContainer>
          <HeaderTitle>Our Links</HeaderTitle>
          <LinksList>
            <ListItem>
              <a href="#">Home</a>
            </ListItem>

            <ListItem>
              <a href="#">About us</a>
            </ListItem>

            <ListItem>
              <a href="#">Our Fleet</a>
            </ListItem>

            <ListItem>
              <a href="#">Contact us</a>
            </ListItem>

            <ListItem>
              <a href="#">Services</a>
            </ListItem>
          </LinksList>
        </SectionContainer>

        <SectionContainer>
          <HeaderTitle>Other Links</HeaderTitle>
          <LinksList>
            <ListItem>
              <a href="#">FAQ</a>
            </ListItem>

            <ListItem>
              <a href="#">Blog</a>
            </ListItem>

            <ListItem>
              <a href="#">Testimonials</a>
            </ListItem>

            <ListItem>
              <a href="#">Support</a>
            </ListItem>

            <ListItem>
              <a href="#">Insurance Policy</a>
            </ListItem>
          </LinksList>
        </SectionContainer>

        <SectionContainer>
          <HeaderTitle>More Links</HeaderTitle>
          <LinksList>
            <ListItem>
              <a href="#">Return Policy</a>
            </ListItem>

            <ListItem>
              <a href="#">Terms &amp; Conditions</a>
            </ListItem>

            <ListItem>
              <a href="#">Forums</a>
            </ListItem>

            <ListItem>
              <a href="#">Seminars</a>
            </ListItem>

            <ListItem>
              <a href="#">Programmes</a>
            </ListItem>
          </LinksList>
        </SectionContainer>

        <SectionContainer>
          <HeaderTitle>Extra Links</HeaderTitle>
          <HorizontalContainer>
            <Icon>
              <FontAwesomeIcon icon={faPhoneAlt} />
            </Icon>

            <SmallText>+234-708-404-6713</SmallText>
          </HorizontalContainer>

          <HorizontalContainer>
            <Icon>
              <FontAwesomeIcon icon={faMailBulk} />
            </Icon>

            <SmallText>hello@Africarstrucks.com.ng</SmallText>
          </HorizontalContainer>
        </SectionContainer>

        {/* <SectionContainer>
          <HeaderTitle>Extra Links</HeaderTitle>
          <LinksList>
            <ListItem>
              <a href="#">Repairs</a>
            </ListItem>

            <ListItem>
              <a href="#">Privacy Policy</a>
            </ListItem>

            <ListItem>
              <a href="#">App</a>
            </ListItem>

            <ListItem>
              <a href="#">Locations</a>
            </ListItem>

            <ListItem>
              <a href="#">Truck Education</a>
            </ListItem>

            <ListItem>
              <a href="#">Lease Terms</a>
            </ListItem>
          </LinksList>
        </SectionContainer> */}
      </InnerContainer>
    </FooterContainer>
  )
}