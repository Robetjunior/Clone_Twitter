import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  
  font-size: 14px;
  padding-left: 18px;
  padding-bottom: 13px;

  > span {
    color: var(--gray);

    margin-bottom: 3px;
    padding-top: 15px;
  }
`;
