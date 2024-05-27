import * as Styled from './Header.styled'
import NewsAPILogo from '../../assets/news-api.png'
import { Search } from '../Search'
import { useLocation } from 'react-router-dom'

const ROUTE_NEWS_DETAIL = '/news-detail'

export function Header() {
  const location = useLocation()

  return (
    <Styled.Container>
      <img
        src={NewsAPILogo}
        alt="news-api-Logo"
        loading="lazy"
        width={176}
        height={60}
      />
      {ROUTE_NEWS_DETAIL !== location.pathname && <Search />}
    </Styled.Container>
  )
}
