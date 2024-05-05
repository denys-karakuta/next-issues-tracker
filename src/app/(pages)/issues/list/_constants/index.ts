export const columns = [
    { label: 'Issue', value: 'title' },
    {
        label: 'Status',
        value: 'status',
        className: 'hidden md:table-cell',
    },
    {
        label: 'Created',
        value: 'createdAt',
        className: 'hidden md:table-cell',
    },
] as const;

export const columnNames = columns.map((column) => column.value);
