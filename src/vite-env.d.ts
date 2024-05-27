/// <reference types="vite/client" />
interface ImportMetaEnv {
    readonly VITE_API_KEY_NEWS: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}