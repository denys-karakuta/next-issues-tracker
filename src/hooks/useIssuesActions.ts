import { useRouter } from 'next/navigation';

import * as issuesRequests from '@/services/api/issues';

import { ROUTES } from '@/constants/routing';

import { NewIssueForm } from '@/types';

import useAbortController from './useAbortController';

const useIssuesActions = () => {
    const { getAbortControllerSignal } = useAbortController();
    const router = useRouter();

    const createNewIssue = async (formData: NewIssueForm) => {
        try {
            await issuesRequests.createNewIssueRequest({ requestBody: formData }, { signal: getAbortControllerSignal() });

            router.push(ROUTES.ISSUES);
        } catch (error: any) {
            console.log(error.message);
        }
    };

    return {
        createNewIssue,
    };
};

export default useIssuesActions;
