import { createStore } from 'zustand'


type StoreProps = {
    search: string
    newsDetailContent: string
}

export type AppStore = ReturnType<typeof createAppStore>

export interface StoreState extends StoreProps {
    changeSearch: (value: string) => void
    saveNewsDetailContent: (value: string) => void
}

export const createAppStore = () => {
    const DEFAULT_PROPS: StoreProps = {
        search: '',
        newsDetailContent: ''
    }
    return createStore<StoreState>()(
        (set) => ({
            ...DEFAULT_PROPS,
            changeSearch: (value: string) =>
                set((state) => ({ ...state, search: value })),
            saveNewsDetailContent: (value: string) =>
                set((state) => ({ ...state, newsDetailContent: value })),
        }),
    )
}




