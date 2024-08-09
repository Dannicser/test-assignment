import { MutableRefObject, useRef } from 'react'

/* eslint-disable */
export function useDebounce(callback: any, delay: number) {
    /* eslint-disable */
    const timer = useRef(null) as MutableRefObject<any>

    return function (): void {
        if (timer.current) {
            clearTimeout(timer.current)
        }

        timer.current = setTimeout(() => {
            callback()
        }, delay)
    }
}
