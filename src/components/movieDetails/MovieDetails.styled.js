import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const LinkButton = styled(Link)`
  display: inline-block;
  margin-bottom: 5px;
  border: 1px solid black;
  border-radius: 5px;
  text-decoration-line: none;
  padding: 3px;
`;

export const MovieInformation = styled.div`
  @media screen and (min-width: 980px) {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }
`;

export const MovieImg = styled.img`
  width: 300px;
`;

export const MovieInformationText = styled.div`
  @media screen and (min-width: 980px) {
    width: calc(100% - 300px - 20px);
  }
`;

export const GenresList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  gap: 12px;
`;

export const MovieMoreInformation = styled.div`
  margin: 0 -20px;
  padding: 5px 20px;
  box-shadow: rgb(0 0 0 / 20%) 0px 9px 9px -6px,
    rgb(0 0 0 / 14%) 0px 9px 12px 0px, rgb(0 0 0 / 12%) 0px 3px 24px 0px;
`;
