import axios, { AxiosError } from 'axios';
import toast from 'react-hot-toast';

const handleAxiosError = (error: Error | AxiosError) => {
    if (axios.isAxiosError(error) && error.code === 'ERR_CANCELED') {
        return;
    }

    if (axios.isAxiosError(error)) {
        const message = error.response?.data?.message || error.message;

        toast.error(message);
    }
};

export default handleAxiosError;
