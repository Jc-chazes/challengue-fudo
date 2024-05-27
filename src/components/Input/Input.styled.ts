import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 56px;
  padding: 8px 16px;
  border-radius: 8px;
  border: 1px solid rgba(0, 0, 0, .1);
  display: flex;
  align-items: center;
`

export const Input = styled.input`
  height: 100%;
  width: 100%;
  border: none;
  outline: none;
  background-color: transparent;
  font-family: BR-Regular;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: var(--color-grey);
  
  &:focus {
    outline: none;
    background-color: transparent;

  }
`
