import * as issuesRequests from '@/services/api/issues';

import { NewIssueForm } from '@/types';

import useAbortController from './useAbortController';

const useIssuesActions = () => {
    const { getAbortControllerSignal } = useAbortController();

    const createNewIssue = async (formData: NewIssueForm) => {
        try {
            await issuesRequests.createNewIssueRequest({ requestBody: formData }, { signal: getAbortControllerSignal() });
        } catch (error: any) {
            console.log(error.message);
        }
    };

    return {
        createNewIssue,
    };
};

export default useIssuesActions;
