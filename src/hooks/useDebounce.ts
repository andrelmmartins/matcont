import { useEffect, useState } from 'react'

const _500Miliseconds = 500

export function useDebounce<Type>(
    value: Type,
    delay = _500Miliseconds,
    loadingStartFunction?: () => void
) {
    const [debouncedValue, setDebouncedValue] = useState(value)

    useEffect(() => {
        if (loadingStartFunction) loadingStartFunction()
        const handler = setTimeout(() => {
            setDebouncedValue(value)
        }, delay)

        return () => {
            clearTimeout(handler)
        }
    }, [value, delay])

    return debouncedValue
}
