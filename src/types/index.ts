import { z } from 'zod';

import { issueSchema } from '@/schemas/issues';

export type IssueFormData = z.infer<typeof issueSchema>;
