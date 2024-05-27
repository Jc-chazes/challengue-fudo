import * as Styled from './Card.styled'

export type CardProps = {
  title: string
  description: string
  image: string
  urlToImage: string
  content: string
  author: string
  onSeeMoreNews?: (description: string) => void
}

export function Card(props: CardProps) {
  return (
    <Styled.Container onClick={() => props.onSeeMoreNews?.(props.content)}>
      <Styled.Image
        src={props.urlToImage}
        loading="lazy"
        alt={`card-${props.title}`}
      />
      <Styled.InnerContainer>
        <Styled.AuthorContainer>{props.author}</Styled.AuthorContainer>
        <Styled.Title>{props.title}</Styled.Title>
      </Styled.InnerContainer>
      <Styled.DescriptionContainer>
        {props.description}
      </Styled.DescriptionContainer>
    </Styled.Container>
  )
}
