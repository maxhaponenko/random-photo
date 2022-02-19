import { useEffect, useCallback } from "react";

export function useDispose(actions = []) {

    const eventHandler = useCallback(() => {
        for (let func of actions) {
            func()
        }
    }, [actions])

    useEffect(() => {
        window.addEventListener('beforeunload', eventHandler)
        return () => {
            window.removeEventListener('beforeunload', eventHandler)
        }
    }, [eventHandler])

}