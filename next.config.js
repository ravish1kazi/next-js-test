/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true
    },
    env: {
        "POSTGRES_URL": "postgres://default:h6FMNnEiqv7l@ep-morning-cell-a4ld0l6u-pooler.us-east-1.aws.neon.tech:5432/verceldb?sslmode=require",
        "POSTGRES_PRISMA_URL": "postgres://default:h6FMNnEiqv7l@ep-morning-cell-a4ld0l6u-pooler.us-east-1.aws.neon.tech:5432/verceldb?sslmode=require&pgbouncer=true&connect_timeout=15",
        "POSTGRES_URL_NO_SSL": "postgres://default:h6FMNnEiqv7l@ep-morning-cell-a4ld0l6u-pooler.us-east-1.aws.neon.tech:5432/verceldb",
        "POSTGRES_URL_NON_POOLING": "postgres://default:h6FMNnEiqv7l@ep-morning-cell-a4ld0l6u.us-east-1.aws.neon.tech:5432/verceldb?sslmode=require",
        "POSTGRES_USER": "default",
        "POSTGRES_HOST": "ep-morning-cell-a4ld0l6u-pooler.us-east-1.aws.neon.tech",
        "POSTGRES_PASSWORD": "h6FMNnEiqv7l",
        "POSTGRES_DATABASE": "verceldb"
    },
};

module.exports = nextConfig;
