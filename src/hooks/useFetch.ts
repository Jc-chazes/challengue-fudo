import { useQuery } from '@tanstack/react-query'
import dayjs from 'dayjs';

const QUERY_KEY = 'https://newsapi.org/v2/everything'

const date = dayjs().subtract(1, "month").add(1, 'day').format("YYYY-MM-DD");

const API_KEY = '8ab9f6a80b5241b4ba7f0b3938ea683e'

export function useFetch<T>(query: string) {
    const queryResult = useQuery<T>(
        [
            QUERY_KEY,
            {
                q: query,
                sortBy: 'publishedAt',
                from: date,
                apiKey: API_KEY,
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