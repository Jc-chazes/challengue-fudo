import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 20px;
  padding-top: 20px;

  @media (max-width: 600px) {
    grid-template-columns: repeat(1fr);
    grid-row-gap: 20px;
    justify-items: center;
  }
`

export const ContainerSearchResult = styled.div`
  margin: 20px auto;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  font-family: BR-Regular;
  font-size: 14px;
  font-weight: 400;
  line-height: 14px;
  color: var(--color-grey-1);
`