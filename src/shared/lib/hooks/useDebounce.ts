import { useRef } from 'react'

/* eslint-disable */
export function useDebounce(callback: any, delay: number) {
    const timer = useRef<ReturnType<typeof setTimeout>>()

    return function (): void {
        if (timer.current) {
            clearTimeout(timer.current)
        }

        timer.current = setTimeout(() => {
            callback()
        }, delay)
    }
}
