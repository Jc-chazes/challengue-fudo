import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 350px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  margin: 10px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  cursor: pointer;
`

export const Image = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`

export const Title = styled.h1`
  font-family: BR-Regular;
  font-size: 17px;
  font-weight: 600;
  line-height: 24px;
  color: var(--color-black);
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
`
export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`

export const DescriptionContainer = styled.div`
  padding: 0 10px ;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-decoration: none;
  font-family: BR-Regular;
  font-size: 12px;
  font-weight: 400;
  line-height: 12px;
`

export const AuthorContainer = styled.p`
  font-family: BR-Regular;
  font-size: 12px;
  line-height: 12px;
  color: #5f6368;
  margin-bottom: 6px;
`