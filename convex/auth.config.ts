import type { AuthConfig } from 'convex/server';

const clerkFrontendApiUrl = (
  globalThis as { process?: { env?: Record<string, string | undefined> } }
).process?.env?.CLERK_FRONTEND_API_URL;

export default {
  providers: clerkFrontendApiUrl
    ? [
        {
          domain: clerkFrontendApiUrl,
          applicationID: 'convex',
        },
      ]
    : [],
} satisfies AuthConfig;
