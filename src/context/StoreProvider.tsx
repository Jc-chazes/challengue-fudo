import * as React from 'react'
import { createAppStore } from './createStore'

type StoreProviderProps = {
  children: React.ReactNode
}

export type AppStore = ReturnType<typeof createAppStore>

export const StoreContext = React.createContext<AppStore | null>(null)

export function StoreProvider({ children }: StoreProviderProps) {
  const storeRef = React.useRef<AppStore>()

  if (!storeRef.current) {
    storeRef.current = createAppStore()
  }
  return (
    <StoreContext.Provider value={storeRef.current}>
      {children}
    </StoreContext.Provider>
  )
}
