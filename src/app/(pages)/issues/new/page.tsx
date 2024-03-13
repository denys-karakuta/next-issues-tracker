'use client';
import { useRouter } from 'next/navigation';

import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { Button, TextField } from '@radix-ui/themes';

import MarkdownEditorContainer from '@/components/common/MarkdownEditorContainer';

import { createNewIssueRequest } from '@/services/api/issues';

import { ROUTES } from '@/constants/routing';

import { NewIssueForm } from '@/types';

const NewIssuePage = () => {
    const { register, control, handleSubmit } = useForm<NewIssueForm>();
    const router = useRouter();

    const onSubmit: SubmitHandler<NewIssueForm> = (data) => {
        createNewIssueRequest({ requestBody: data });
        router.push(ROUTES.ISSUES);
    };

    return (
        <form className="max-w-xl space-y-3" onSubmit={handleSubmit(onSubmit)}>
            <TextField.Root>
                <TextField.Input placeholder="Title" {...register('title')} />
            </TextField.Root>

            <Controller
                name="description"
                control={control}
                render={({ field }) => <MarkdownEditorContainer placeholder="Description" field={field} />}
            />

            <Button size="2">Submit New Issue</Button>
        </form>
    );
};

export default NewIssuePage;
