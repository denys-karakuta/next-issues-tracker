'use client';
import React from 'react';

import { Button, TextField } from '@radix-ui/themes';

import MarkdownEditorContainer from '@/src/components/common/MarkdownEditorContainer';

const NewIssuePage = () => {
    return (
        <div className="max-w-xl space-y-3">
            <TextField.Root>
                <TextField.Input placeholder="Title" />
            </TextField.Root>

            <MarkdownEditorContainer placeholder="Description" />

            <Button size="2">Submit New Issue</Button>
        </div>
    );
};

export default NewIssuePage;
