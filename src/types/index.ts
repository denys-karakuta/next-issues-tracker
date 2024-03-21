import { z } from 'zod';

import { createIssueSchema } from '@/schemas/issues';

export type NewIssueForm = z.infer<typeof createIssueSchema>;
