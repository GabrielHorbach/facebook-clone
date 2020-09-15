import styled from 'styled-components';

export const Container = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const IconWrapper = styled.div`
  height: 40px;
  width: 40px;
  border-top-left-radius: 50px;
  border-bottom-left-radius: 50px;
  background: var(--grey);
  margin-left: .25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: .25rem;
  z-index: 1;
`;

export const Input = styled.input`
  width: 240px;
  height: 40px;
  padding: 15px;
  border: none;
  border-radius: 50px;
  background: var(--grey);
  font-size: .9375rem;
  letter-spacing: .10px;
  margin-left: -1rem;
`;