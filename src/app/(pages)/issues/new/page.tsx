'use client';

import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, TextField } from '@radix-ui/themes';

import MarkdownEditorContainer from '@/components/common/MarkdownEditorContainer';

import useIssuesActions from '@/hooks/useIssuesActions';

import { createIssueSchema } from '@/schemas/issues';

import { NewIssueForm } from '@/types';

const NewIssuePage = () => {
    const { register, control, handleSubmit } = useForm<NewIssueForm>({ resolver: zodResolver(createIssueSchema) });
    const { createNewIssue } = useIssuesActions();

    const onSubmit: SubmitHandler<NewIssueForm> = (data) => {
        createNewIssue(data);
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
