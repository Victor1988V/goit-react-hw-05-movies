import styled from 'styled-components';

export const Div = styled.div`
  h3 {
    text-align: center;
    font-style: italic;
    padding: 30px;
    font-size: 36px;
  }
  ul {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 15px;
    list-style: none;

    li {
      display: flex;
      flex-direction: column;
      gap: 15px;
      border-bottom: 1px solid #8a7aa6;
      padding-bottom: 10px;
    }
    p {
      b {
        color: #8a7aa6;
      }
    }
  }
`;
