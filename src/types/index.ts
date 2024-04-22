import { z } from 'zod';

import { issueSchema } from '@/schemas/issues';

export type NewIssueForm = z.infer<typeof issueSchema>;
