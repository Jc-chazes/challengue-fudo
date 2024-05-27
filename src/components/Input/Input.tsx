import * as Styled from './Input.styled'
import { InputProps } from './Input.types'
import { CiSearch } from 'react-icons/ci'

export function Input({
  type,
  name,
  placeholder,
  onChange,
  value,
}: InputProps) {
  return (
    <Styled.Container>
      <Styled.Input
        type={type}
        name={name}
        id={name}
        autoComplete="off"
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
      <CiSearch size={30} color="#5f6368" />
    </Styled.Container>
  )
}
