import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  a {
    color: #dfdfdf;
    text-decoration: none;
  }
  img {
    border-radius: 20px;
  }
  ul {
    list-style: none;
  }
  header {
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    background-color: rgba(99, 99, 108, 70%);
    padding: 15px 35px;
    box-shadow: 5px 0 5px black;
    z-index: 1;
    & ul {
      display: flex;
      gap: 15px;
    }
    .link {
      font-family: 'Quicksand', sans-serif;
      font-size: 20px;
      font-weight: 500;
      display: inline-block;
      width: 100px;
      text-align: center;
      border: 2px solid #333;
      border-radius: 5px;
      padding: 5px;
      background: rgba(112, 112, 112, 75%);
      color: #fff;
      &.active {
        background: rgba(96, 145, 114, 100%);
      }
      &:hover:not(.active) {
        background: rgba(124, 167, 170, 65%);
      }
    }
  }
`;

export const Main = styled.main`
  padding: 0 15px 15px;
  margin-top: 75px;
`;
