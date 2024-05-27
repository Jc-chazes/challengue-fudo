import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 40px;
  flex-direction: column;
`

export const ContainerButton = styled.div`
    display: flex;
    justify-content: flex-start;
    padding: 20px;
    width: 100%;
`

export const ButtonBack = styled.button`
    display: flex;
    width: 90px;
    align-items: center;
    justify-content: space-between;
    font-family: BR-Regular;
    font-size: 18px;
    font-weight: 400;
    line-height: 20px;
    border-radius: 12px;
    outline: none;
    border: none;
    height: 40px;
    background-color: transparent;
    cursor: pointer;
`

export const ContainerNewsContent = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 350px;
    color: var(--color-blue-berry);
    text-decoration: none;
    font-family: BR-Regular;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
`