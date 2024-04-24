'use client';

import { Issue } from '@prisma/client';
import { useRouter } from 'next/navigation';
import { Button, TextField } from '@radix-ui/themes';
import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';

import MarkdownEditorContainer from '@/components/ui/MarkdownEditorContainer';
import ErrorMessage from '@/components/ui/ErrorMessage';
import Spinner from '@/components/common/Spinner';

import useIssuesActions from '@/hooks/useIssuesActions';
import useLoading from '@/hooks/useLoading';

import { issueSchema } from '@/schemas/issues';

import { ROUTES } from '@/constants/routing';

import { IssueFormData } from '@/types';

type OwnProps = {
    issue?: Issue;
};

const IssueForm: React.FC<OwnProps> = (props) => {
    const { issue } = props;

    const {
        control,
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IssueFormData>({ resolver: zodResolver(issueSchema) });

    const { createIssueAction, updateIssueAction } = useIssuesActions();
    const { isLoading, startLoading, stopLoading } = useLoading();
    const router = useRouter();

    const onSubmit: SubmitHandler<IssueFormData> = (data) => {
        startLoading();

        if (issue) {
            updateIssueAction(issue.id, data);
        } else {
            createIssueAction(data);
        }

        stopLoading();

        router.push(`/${ROUTES.ISSUES_CREATE}`);
        router.refresh();
    };

    return (
        <form className="max-w-xl space-y-3" onSubmit={handleSubmit(onSubmit)}>
            <TextField.Root>
                <TextField.Input {...register('title')} defaultValue={issue?.title} placeholder="Title" />
            </TextField.Root>

            <ErrorMessage>{errors.title?.message}</ErrorMessage>

            <Controller
                name="description"
                control={control}
                defaultValue={issue?.description}
                render={({ field }) => <MarkdownEditorContainer placeholder="Description" field={field} />}
            />

            <ErrorMessage>{errors.description?.message}</ErrorMessage>

            <Button size="2" disabled={isLoading}>
                {issue ? 'Update' : 'Submit'} Issue {isLoading ? <Spinner /> : null}
            </Button>
        </form>
    );
};

export default IssueForm;
