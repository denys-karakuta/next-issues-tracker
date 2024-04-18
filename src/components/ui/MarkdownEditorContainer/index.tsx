import SimpleMDE from 'react-simplemde-editor';
import { FieldValues } from 'react-hook-form';

import 'easymde/dist/easymde.min.css';

type OwnProps = {
    placeholder?: string;
    field?: FieldValues;
};

const MarkdownEditorContainer: React.FC<OwnProps> = (props) => {
    const { placeholder, field } = props;

    return <SimpleMDE placeholder={placeholder} {...field} />;
};

export default MarkdownEditorContainer;
