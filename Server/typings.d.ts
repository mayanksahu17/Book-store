// typings.d.ts
declare namespace NodeJS {
    interface ProcessEnv {
        ACCESS_TOKEN: string;
        ACCES_EXPIRY_TOKEN: string;
        REFRESH_TOKEN_SECRET: string;
        REFRESH_TOKEN_EXPIRY: string;
        // Add other environment variables here if needed
    }
}
