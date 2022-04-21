import styled from "styled-components";


export const ItemWrap = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  position: relative;
  width: 100%;
  padding:5px;
`;

export const Item = styled.div`
  display: flex;
  width: calc(20% - 10px);
  margin:5px 5px;
  position: relative;
  height: 310px;
  @media only screen and (max-width: 768px) {
    width: calc(50% - 10px);
    height: 200px;
    
    span {
      font-size: 11px;
      padding-right: 0;
    }
  }

  img {
    max-width: 100%;
    flex-shrink: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    object-fit: cover;
  }
  span {
    position: absolute;
    bottom: 15px;
    padding-right: 25px;
    right: 0;
    color:#fff;
    width: 100%;
    z-index: 7;
    font-weight: 700;
    transition: all .2s ease-in;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: right;
        @media only screen and (max-width: 768px) {
          font-size: 11px;
          padding-right:0;
          text-align: left;
          padding-left: 10px;
        }
    }
    &:hover {
      span {
        bottom:30px;
      }
      a {
        &:before {
          transition: all .2s ease-in;
          background-image: linear-gradient(180deg, rgba(15, 15, 15, 0) 20%, rgba(0, 0, 0, 0.9) 100%);
        }
      }
    }
  a {
    display: block;
    position: relative;
    width: 100%;
    transition: all .2s ease-in;
    &:before {
      content: "";
      width: 100%;
      height: 100%;
      background-image: linear-gradient(180deg, rgba(15, 15, 15, 0) 20%, rgba(0, 0, 0, 0.7) 100%);
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 6;
      transition: all .2s ease-in;
    }
  }
`;

export const Loading = styled.div`
  display: flex;
  flex-direction: row;
  background: url("/assets/images/loading.gif") no-repeat center center;
  justify-content: center;
  position: relative;
  width: 100%;
  height: 70px;
  background-size: contain;
`;



