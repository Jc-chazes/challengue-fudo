import styled from 'styled-components'

export const Container = styled.div`
  height: 88px;
  border-bottom: 1px solid rgba(0, 0, 0, .1); 
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  top:0;
  background-color: #fff;

  @media (max-width: 600px) {
   > img {
    display: none;
   }
  }
`
