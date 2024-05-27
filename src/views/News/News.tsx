import * as Styled from './News.styled'
import { useStore } from '../../context/useStore'
import { useFetch } from '../../hooks/useFetch'
import { Loader } from '../../components/Loader'
import { Card } from '../../components/Card/Card'
import { NewsProps } from './News.types'
import { useNavigate } from 'react-router-dom'

export function News() {
  const store = useStore((state) => state)

  const navigate = useNavigate()

  const { data, isFetching } = useFetch<NewsProps>(store.search)

  const onSeeMoreNews = (value: string) => {
    store.saveNewsDetailContent(value)
    navigate('/news-detail')
  }

  if (isFetching) {
    return (
      <Styled.ContainerSearchResult>
        <Loader />
      </Styled.ContainerSearchResult>
    )
  }

  if (!data) {
    return (
      <Styled.ContainerSearchResult>Not results</Styled.ContainerSearchResult>
    )
  }

  return (
    <Styled.Container>
      {data.articles.map((item, key) => (
        <Card
          {...item}
          key={`${item.title}-${key}`}
          onSeeMoreNews={onSeeMoreNews}
        />
      ))}
    </Styled.Container>
  )
}
