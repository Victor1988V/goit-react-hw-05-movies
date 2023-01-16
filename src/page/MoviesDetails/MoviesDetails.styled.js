import styled from 'styled-components';

export const Div = styled.div`
  display: grid;
  grid-gap: 15px;
  position: relative;
  a {
    color: black;
    &:hover,
    &:focus {
      background-color: #b79bb3;
    }
  }
  .backLink {
    position: fixed;
    z-index: 1;
    top: 10px;
    right: 10px;
    font-size: 20px;
    border: 2px solid #d3d5ff40;
    border-radius: 10px;
    padding: 10px;
    text-align: end;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    background-color: rgba(26, 26, 26, 65%);
    color: white;
    &:hover,
    &:focus {
      background-color: rgba(103, 102, 105, 100%);
    }
  }
  img {
    max-width: 300px;
  }
  .movie-details {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    gap: 15px;
    h2 {
      text-align: center;
      font-size: 54px;
    }
  }
  .details-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    .overview {
      font-style: italic;
    }
    .genres-title {
      font-weight: 700;
    }
  }
  .links {
    display: flex;
    gap: 20px;
    justify-content: space-around;
    & a {
      border-top: 2px solid rgba(103, 102, 105, 85%);
      border-bottom: 2px solid rgba(103, 102, 105, 85%);
      padding: 10px;
      border-radius: 10px;
      &.active {
        background-color: rgba(72, 66, 84, 85%);
        border: none;
      }
    }
  }
`;
