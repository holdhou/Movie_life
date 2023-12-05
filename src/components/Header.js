import styled from "styled-components";
import { Link } from "react-router-dom";
import { routes } from "../routes";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faTicket, faUser } from "@fortawesome/free-solid-svg-icons";

const SHeader = styled.header`
  width: 100%;
  display: flex;
  position: fixed;
  align-items: center;
  background-color: #0390d2;
  padding: 1% 0;
  top: 0;
  left: 0;
  right: 0;
  z-index: 5;
  font-weight: 900;
`;

const Img = styled.div`
  display: none;
  color: white;
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
  return (
    <SHeader>
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
            검색
          </Link>
          <Link to={"/"}>
            <FontAwesomeIcon icon={faUser} />
          </Link>
        </SearchIconContainer>
      </Menu>
    </SHeader>
  );
};
