import { envOr } from './env';

export const credentials = {
    standardUser: envOr('STANDARD_USER', 'standard_user'),
    password: envOr('TTA_SECRET', 'tta_secret'),
} as const;

/*
envOr is a custom helper function in config/env.ts file that reads a value from an environment
variable and uses a default value if the environment variable is not set.
envOr() reads process.env.STANDARD_USER.
Yes, STANDARD_USER and TTA_SECRET are environment variable names in your credentials.ts code.

However, they are only available as environment variables if you define them in your .env file or your system/CI environment.
*/