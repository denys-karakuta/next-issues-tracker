import { useState } from 'react';

const useLoading = (initialLoading = false) => {
    const [isLoading, setIsLoading] = useState(initialLoading);

    const startLoading = () => setIsLoading(true);

    const stopLoading = () => setIsLoading(false);

    return { isLoading, startLoading, stopLoading };
};

export default useLoading;
