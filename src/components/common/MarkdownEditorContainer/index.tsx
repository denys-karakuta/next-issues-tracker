import React from 'react';
import SimpleMDE from 'react-simplemde-editor';

import 'easymde/dist/easymde.min.css';

type OwnProps = {
    placeholder?: string;
};

const MarkdownEditorContainer: React.FC<OwnProps> = (props) => {
    const { placeholder } = props;

    return <SimpleMDE placeholder={placeholder} />;
};

export default MarkdownEditorContainer;
