import { Navigate, Route, Routes } from 'react-router-dom'
import ErrorBoundary from './components/ErrorBundary/ErrorBundary'
import { Layout } from './components/Layout'
import { News } from './views/News'
import { StoreProvider } from './context/StoreProvider'
import { QueryClientProvider } from '@tanstack/react-query'
import { useQueryClient } from './hooks/useQueryClient'
import { NewsDetail } from './views/NewsDetail'

export function App() {
  const queryClient = useQueryClient()

  return (
    <ErrorBoundary>
      <StoreProvider>
        <QueryClientProvider client={queryClient}>
          <Layout>
            <Routes>
              <Route path="/" element={<News />} />
              <Route path="/news-detail" element={<NewsDetail />} />
              <Route path="*" element={<Navigate to={{ pathname: '/' }} />} />
            </Routes>
          </Layout>
        </QueryClientProvider>
      </StoreProvider>
    </ErrorBoundary>
  )
}
