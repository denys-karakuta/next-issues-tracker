import { Issue } from '@prisma/client';

import * as issuesRequests from '@/services/axios/issues';

import { IssueFormData } from '@/types';

const useIssuesActions = () => {
    const createIssueAction = async (formData: IssueFormData) => {
        try {
            await issuesRequests.createIssueRequest({ requestBody: formData });
        } catch (error: any) {
            console.log(error.message);
        }
    };

    const updateIssueAction = async (id: number, formData: IssueFormData) => {
        try {
            await issuesRequests.updateIssueRequest({ id, requestBody: formData });
        } catch (error: any) {
            console.log(error.message);
        }
    };

    const deleteIssueAction = async (id: number) => {
        try {
            await issuesRequests.deleteIssueRequest({ id });
        } catch (error: any) {
            console.log(error.message);
        }
    };

    const patchIssueAction = async (id: number, requestBody: { assignedToUserId: Issue['assignedToUserId'] }) => {
        try {
            await issuesRequests.patchIssueRequest({ id, requestBody });
        } catch (error: any) {
            console.log(error.message);
        }
    };

    return {
        createIssueAction,
        updateIssueAction,
        deleteIssueAction,
        patchIssueAction,
    };
};

export default useIssuesActions;
