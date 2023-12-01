import styled from "styled-components";
import { Link } from "react-router-dom";
import { routes } from "../routes";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const SHeader = styled.header`
  width: 100%;
  display: flex;
  position: relative;
  align-items: center;
  background-color: #333333;
  padding: 1% 5%;
  position: fixed;
  z-index: 5;
`;
const SearchIconContainer = styled.div`
  position: absolute;
  right: 10%;
`;

const Logo = styled.div`
  font-size: 30px;
  margin-right: 20px;
  font-weight: 400;
  border: 1px solid white;
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
        <Link to={routes.Movie}>Movie LIFE</Link>
      </Logo>

      <Menu>
        <li>
          <Link to={routes.Movie}>Movie</Link>
        </li>
        <li>
          <Link to={routes.Series}>Series</Link>
        </li>
        <SearchIconContainer>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </SearchIconContainer>
      </Menu>
    </SHeader>
  );
};
