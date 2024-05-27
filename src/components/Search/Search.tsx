import * as React from 'react'
import { Input } from '../Input'
import debounce from 'lodash.debounce'
import * as Styled from './Search.styled'
import { useStore } from '../../context/useStore'

export function Search() {
  const changeSearch = useStore((state) => state.changeSearch)

  const handleSearch = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      changeSearch(e.target.value)
    },
    [changeSearch],
  )

  const debouncedHandleSearch = React.useMemo(
    () => debounce(handleSearch, 500),
    [handleSearch],
  )

  React.useEffect(() => {
    return () => {
      debouncedHandleSearch.cancel()
    }
  }, [debouncedHandleSearch])

  return (
    <Styled.Container>
      <Input
        type="text"
        name="search"
        placeholder="news search"
        onChange={debouncedHandleSearch}
      />
    </Styled.Container>
  )
}
