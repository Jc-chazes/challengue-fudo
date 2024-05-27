import styled, { keyframes } from 'styled-components'
import { LoaderSvg } from '../../assets/icons/LoaderSvg'

export const rotateKeyframes = keyframes`
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
`

export const Loader = styled(LoaderSvg)`
  animation: ${rotateKeyframes} 550ms steps(12) infinite;
`
