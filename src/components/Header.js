import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { routes } from "../routes";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faTicket,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const SHeader = styled.header`
  width: 100%;
  display: flex;
  position: fixed;
  align-items: center;
  padding: 1% 0;
  left: 0;
  top: 0;
  z-index: 5;
  font-weight: 900;
  transition: background-color 0.3s ease;
  background-color: ${(props) =>
    props.$isScrolled ? "rgba(78, 78, 78, 1)" : "rgba(78, 78, 78, 0.5)"};

  a {
    color: white;
  }
`;

const Img = styled.div`
  display: none;

  @media screen and (max-width: 500px) {
    display: block;
  }
`;

const Logonone = styled.div`
  @media screen and (max-width: 500px) {
    display: none;
  }
`;

const SearchIconContainer = styled.div`
  display: flex;
  position: absolute;
  right: 10vw;
`;

const Logo = styled.div`
  font-size: 30px;
  margin-right: 20px;
  font-weight: 400;
  margin-left: 5%;
`;

const Menu = styled.ul`
  display: flex;
  justify-content: center;
  font-size: 20px;

  a {
    margin: 0 10px;
  }
`;

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 50;
      const scrolled = window.scrollY > scrollThreshold;
      setIsScrolled(scrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <SHeader $isScrolled={isScrolled}>
      <Logo>
        <Img>
          <FontAwesomeIcon icon={faTicket} />
        </Img>
        <Logonone>
          <Link to={routes.Movie}>Movie LIFE</Link>
        </Logonone>
      </Logo>

      <Menu>
        <li>
          <Link to={routes.Movie}>Movie</Link>
        </li>
        <li>
          <Link to={routes.Series}>Series</Link>
        </li>
        <SearchIconContainer>
          <Link to={"/search"}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </Link>

          <Link to={"/"}>
            <FontAwesomeIcon icon={faUser} />
          </Link>
        </SearchIconContainer>
      </Menu>
    </SHeader>
  );
};
