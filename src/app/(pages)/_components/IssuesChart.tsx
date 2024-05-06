'use client';

import React from 'react';
import { Card } from '@radix-ui/themes';
import { ResponsiveContainer, BarChart, XAxis, YAxis, Bar } from 'recharts';

type OwnProps = {
    inProgress: number;
    closed: number;
    open: number;
};

const IssuesChart: React.FC<OwnProps> = (props) => {
    const { open, inProgress, closed } = props;

    const data = [
        { label: 'Open', value: open },
        { label: 'In Progress', value: inProgress },
        { label: 'Closed', value: closed },
    ];

    return (
        <Card>
            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={data}>
                    <XAxis dataKey="label" />

                    <YAxis />

                    <Bar dataKey="value" barSize={30} style={{ fill: 'var(--accent-9)' }} />
                </BarChart>
            </ResponsiveContainer>
        </Card>
    );
};

export default IssuesChart;
