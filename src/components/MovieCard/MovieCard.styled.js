import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  padding: 15px;
  margin-top: 20px;
  margin-bottom: 20px;
  border: 1px solid ${p => p.theme.colors.lightGreen};
  border-radius: 5px;
  box-shadow: ${props => props.theme.shadows.shadow};

  @media screen and (min-width: 768px) {
    width: 600px;
    flex-direction: row;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-left: 20px;
`;

