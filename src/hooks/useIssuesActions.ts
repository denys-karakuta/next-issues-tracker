import * as issuesRequests from '@/services/api/issues';

import { IssueFormData } from '@/types';

const useIssuesActions = () => {
    const createNewIssue = async (formData: IssueFormData) => {
        try {
            await issuesRequests.createIssueRequest({ requestBody: formData });
        } catch (error: any) {
            console.log(error.message);
        }
    };

    const updateIssue = async (id: string, formData: IssueFormData) => {
        try {
            await issuesRequests.updateIssueRequest({ id, requestBody: formData });
        } catch (error: any) {
            console.log(error.message);
        }
    };

    return {
        createNewIssue,
        updateIssue,
    };
};

export default useIssuesActions;
