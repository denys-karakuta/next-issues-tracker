import * as issuesRequests from '@/services/axios/issues';

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

    const deleteIssue = async (id: number) => {
        try {
            await issuesRequests.deleteIssueRequest({ id });
        } catch (error: any) {
            console.log(error.message);
        }
    };

    return {
        createNewIssue,
        updateIssue,
        deleteIssue,
    };
};

export default useIssuesActions;
