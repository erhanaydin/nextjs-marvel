import styled from "styled-components";


export const DetailWrap = styled.div`
  width:1170px;
  margin: 0 auto;
  flex-direction: row;
  display: flex;

  @media only screen and (max-width: 768px) {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
`;

export const Title = styled.h2`
 font-weight: 700;
  font-size: 36px;
`;

export const ComicsTitle = styled.h2`
 font-weight: 700;
  font-size: 20px;
  margin-top:50px
`;

export const Description = styled.p`
 font-weight: 400;
  font-size: 16px;
`;

export const DetailItem = styled.div`
  width: 50%;
  padding:25px 15px;
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: row;
    flex-wrap: wrap;
  }
  
  &:nth-child(1) {
    width: 55%;
    @media only screen and (max-width: 768px) {
      width: 100%;
    }
  }
  &:nth-child(2) {
    width: 45%;
    @media only screen and (max-width: 768px) {
      width: 100%;
    }
  }
  
  img {
    width: 100%;
  }
  a {
    display: flex;
    color: #EC1D24;
    margin-bottom: 10px;
    line-height: 34px;
    font-weight: 700;
  }

  @media only screen and (max-width: 768px) {
  width: 100%;
  }
`;


export const ComicsList = styled.div`
ul {
  list-style: none;
  padding-left: 0;
  li {
    display: flex;
    margin-bottom: 10px;
    a {
      display: flex;
      color: black;
      line-height: 32px;
      font-weight: 500;
    }
  }
}
`;

