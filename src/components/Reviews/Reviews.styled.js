import styled from 'styled-components';

export const UL = styled.ul`
  padding: 15px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  list-style: none;

  li {
    border-top: 2px solid rgba(103, 102, 105, 85%);
    border-bottom: 2px solid rgba(103, 102, 105, 85%);
    padding: 10px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    h3 {
      text-align: end;
    }
    p {
      font-style: italic;
    }
  }
`;
