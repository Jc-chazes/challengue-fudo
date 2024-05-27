import { useQuery } from '@tanstack/react-query'
import dayjs from 'dayjs';

const QUERY_KEY = 'https://newsapi.org/v2/everything'

const date = dayjs().subtract(1, "month").add(1, 'day').format("YYYY-MM-DD");

const SORT_BY = 'publishedAt'

export function useFetch<T>(query: string) {
    const queryResult = useQuery<T>(
        [
            QUERY_KEY,
            {
                q: query,
                sortBy: SORT_BY,
                from: date,
                apiKey: import.meta.env.VITE_API_KEY_NEWS,
            },
        ],
        {
            enabled: !!query,
            refetchOnWindowFocus: false,
            refetchOnMount: false,
        },
    )

    return queryResult
}