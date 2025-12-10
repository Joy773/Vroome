import { FC } from "react";

import { Box, Container, FooterBottom, FooterBottomLinkDiv, AppLogo, FooterContent, FooterLink, FooterLinkItems, FooterListTtem, FooterLogoDiv, FooterNav, FooterTitle, FooterWrapper, LogoContainer, NavIcon, SpanBlock } from "./styles";

import { Logo } from "../../assets/icon";
import { Link } from "react-router-dom";

const footerLinks = [
  {
    title: "About",
    sublinks: [
      {
        name: "How it works",
        link: "/#Howitworks",
      },
      {
        name: "Featured",
        link: "/#Featured",
      },
      {
        name: "Partnership",
        link: "/#Partnership",
      },
      {
        name: "Bussiness Relation",
        link: "/#BussinessRelation",
      },
    ],
  },
  {
    title: "Community",
    sublinks: [
      {
        name: "Events",
        link: "/#Events",
      },
      {
        name: "Blog",
        link: "/#Blog",
      },
      {
        name: "Podcast",
        link: "/#Podcast",
      },
      {
        name: "Invite a friend",
        link: "/#Inviteafriend",
      },
    ],
  },
  {
    title: "Socials",
    sublinks: [
      {
        name: "Discord",
        link: "/#Discord",
      },
      {
        name: "Instagram",
        link: "/#Instagram",
      },
      {
        name: "Twitter",
        link: "/#Twitter",
      },
      {
        name: "Facebook",
        link: "/#Facebook",
      },
    ],
  }
]

const Footer: FC = () => {
  return (
    <FooterWrapper>
      <Container>
        <Box>
          <FooterLogoDiv>
            <FooterContent>
              <LogoContainer>
                <Link to="/">
                  <h1 className="text-3xl text-blue-600 font-bold">VROOME</h1>
                </Link>
              </LogoContainer>
              <FooterContent>
                Drive in style with Vroome. Your key to comfort, freedom, and adventure.
              </FooterContent>
            </FooterContent>
          </FooterLogoDiv>
          <FooterLinkItems>
            {
              footerLinks.map((link) => (
                <FooterListTtem key={link.title}>
                  <FooterTitle>{link.title}</FooterTitle>
                  <FooterNav aria-label="Footer Nav">
                    {link.sublinks.map((item) => (<FooterLink key={item.name} href={item.link}> {item.name} </FooterLink>))}
                  </FooterNav>
                </FooterListTtem>
              ))
            }
          </FooterLinkItems>
        </Box>
        <hr />
        <FooterBottom>
          <div>©2025 VROOME. All rights reserved</div>
          <FooterBottomLinkDiv>
            <div>Privacy & Policy</div>
            <div>Terms & Condition</div>
          </FooterBottomLinkDiv>
        </FooterBottom>
      </Container>
    </FooterWrapper>
  )
}

export default Footer;