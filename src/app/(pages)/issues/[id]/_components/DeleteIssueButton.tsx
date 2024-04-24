'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { AlertDialog, Button, Flex } from '@radix-ui/themes';

import Spinner from '@/components/common/Spinner';

import useIssuesActions from '@/hooks/useIssuesActions';
import useLoading from '@/hooks/useLoading';

import { ROUTES } from '@/constants/routing';

type OwnProps = { issueId: number };

const DeleteIssueButton: React.FC<OwnProps> = (props) => {
    const { issueId } = props;

    const { isLoading, startLoading, stopLoading } = useLoading();
    const { deleteIssue } = useIssuesActions();
    const [error, setError] = useState(false);
    const router = useRouter();

    const handleDeleteIssue = () => {
        try {
            startLoading();

            deleteIssue(issueId);

            router.push(`/${ROUTES.ISSUES}`);
            router.refresh();
        } catch (error) {
            setError(true);
        } finally {
            stopLoading();
        }
    };

    return (
        <>
            <AlertDialog.Root>
                <AlertDialog.Trigger>
                    <Button variant="surface" size="3" color="red" disabled={isLoading}>
                        Delete Issue
                        {isLoading ? <Spinner /> : null}
                    </Button>
                </AlertDialog.Trigger>

                <AlertDialog.Content>
                    <AlertDialog.Title>Confirm Deletion</AlertDialog.Title>

                    <AlertDialog.Description>Are you sure you want to delete this issue? This action cannot be undone.</AlertDialog.Description>
                    <Flex mt="4" gap="3" justify="end">
                        <AlertDialog.Cancel>
                            <Button variant="soft" color="gray">
                                Cancel
                            </Button>
                        </AlertDialog.Cancel>

                        <AlertDialog.Action>
                            <Button color="red" variant="surface" onClick={handleDeleteIssue}>
                                Delete Issue
                            </Button>
                        </AlertDialog.Action>
                    </Flex>
                </AlertDialog.Content>
            </AlertDialog.Root>

            <AlertDialog.Root open={error}>
                <AlertDialog.Content>
                    <AlertDialog.Title>Error</AlertDialog.Title>

                    <AlertDialog.Description>This issue could not be deleted.</AlertDialog.Description>

                    <Button color="gray" variant="soft" mt="2" onClick={() => setError(false)}>
                        OK
                    </Button>
                </AlertDialog.Content>
            </AlertDialog.Root>
        </>
    );
};

export default DeleteIssueButton;
