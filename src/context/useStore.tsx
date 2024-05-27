import { useContext } from 'react'
import { useStore as useStoreZustand } from 'zustand'
import { StoreContext } from './StoreProvider'
import { StoreState } from './createStore'

export function useStore<T>(selector: (state: StoreState) => T): T {
  const store = useContext(StoreContext)
  if (!store) throw new Error('Missing StoreContext.Provider in the tree')

  return useStoreZustand(store, selector)
}
