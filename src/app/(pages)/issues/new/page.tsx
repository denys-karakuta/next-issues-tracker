'use client';

import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { Button, TextField } from '@radix-ui/themes';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';

import MarkdownEditorContainer from '@/components/common/MarkdownEditorContainer';
import ErrorMessage from '@/components/common/ErrorMessage';
import Spinner from '@/components/common/Spinner';

import useIssuesActions from '@/hooks/useIssuesActions';
import useLoading from '@/hooks/useLoading';

import { createIssueSchema } from '@/schemas/issues';

import { ROUTES } from '@/constants/routing';

import { NewIssueForm } from '@/types';

const NewIssuePage = () => {
    const {
        control,
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<NewIssueForm>({ resolver: zodResolver(createIssueSchema) });

    const { isLoading, startLoading, stopLoading } = useLoading();
    const { createNewIssue } = useIssuesActions();

    const router = useRouter();

    const onSubmit: SubmitHandler<NewIssueForm> = (data) => {
        startLoading();
        createNewIssue(data);
        stopLoading();

        router.push(ROUTES.ISSUES);
    };

    return (
        <form className="max-w-xl space-y-3" onSubmit={handleSubmit(onSubmit)}>
            <TextField.Root>
                <TextField.Input placeholder="Title" {...register('title')} />
            </TextField.Root>

            <ErrorMessage>{errors.title?.message}</ErrorMessage>

            <Controller
                name="description"
                control={control}
                render={({ field }) => <MarkdownEditorContainer placeholder="Description" field={field} />}
            />

            <ErrorMessage>{errors.description?.message}</ErrorMessage>

            <Button size="2" disabled={isLoading}>
                Submit New Issue {isLoading ? <Spinner /> : null}
            </Button>
        </form>
    );
};

export default NewIssuePage;
