import { useNavigate } from 'react-router-dom'
import { useStore } from '../../context/useStore'
import * as Styled from './NewsDetail.styled'
import { MdArrowBackIos } from 'react-icons/md'

const DEFAULT_TRUNCATE_STRING_NEWS_API = 200

export function NewsDetail() {
  const { saveNewsDetailContent, newsDetailContent } = useStore(
    (state) => state,
  )

  const navigate = useNavigate()

  const onBack = () => {
    saveNewsDetailContent('')
    navigate('/')
  }

  return (
    <Styled.Container>
      <Styled.ContainerButton>
        <Styled.ButtonBack onClick={onBack}>
          <MdArrowBackIos size={25} color="#5f6368" />
          Back
        </Styled.ButtonBack>
      </Styled.ContainerButton>
      <Styled.ContainerNewsContent>
        {newsDetailContent.substring(0, DEFAULT_TRUNCATE_STRING_NEWS_API)}
      </Styled.ContainerNewsContent>
    </Styled.Container>
  )
}
