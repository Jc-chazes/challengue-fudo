import * as React from 'react'
import { QueryClient } from '@tanstack/react-query'
import axios from 'axios'

const TIMEOUT = 1500

export function useQueryClient() {
    const queryClient = React.useMemo(() => {
        const defaultQueryFn = async (queryFnContext: { queryKey: any }) => {
            const { queryKey } = queryFnContext

            const [endpoint, queryParams] = queryKey

            const params = { ...queryParams }

            const { data } = await axios.get(endpoint, {
                params,
                timeout: TIMEOUT,
            })

            return data
        }

        return new QueryClient({
            defaultOptions: {
                queries: {
                    queryFn: defaultQueryFn,
                    retry: 1,
                },
            },
        })
    }, [])

    return queryClient
}
