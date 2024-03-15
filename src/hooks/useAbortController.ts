import { useCallback, useEffect, useRef } from 'react';

const useAbortController = () => {
    const abortControllerRef = useRef<AbortController | null>(null);

    useEffect(() => () => abortControllerRef.current?.abort(), []);

    const getAbortControllerSignal = useCallback((): AbortSignal => {
        abortControllerRef.current?.abort();

        const newController = new AbortController();

        abortControllerRef.current = newController;

        return newController.signal;
    }, []);

    return { getAbortControllerSignal };
};

export default useAbortController;
