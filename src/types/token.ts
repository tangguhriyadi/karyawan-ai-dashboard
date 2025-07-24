export type User = {
    id: string;
    aud: string;
    role: string;
    email: string;
    email_confirmed_at: string;
    phone: string;
    confirmed_at: string;
    last_sign_in_at: string;
    app_metadata: {
        provider: string;
        providers: string[];
    };
    user_metadata: {
        email: string;
        email_verified: boolean;
        full_name: string;
        phone_verified: boolean;
        sub: string;
    };
    identitie: {
        identity_id: string;
        id: string;
        user_id: string;
        identity_data: {
            email: string;
            email_verified: boolean;
            full_name: string;
            phone_verified: boolean;
            sub: string;
        };
        provider: "email";
        last_sign_in_at: string;
        created_at: string;
        updated_at: string;
        email: string;
    }[];
    created_at: string;
    updated_at: string;
    is_anonymous: boolean;
};

export type TokenType = {
    access_token: string;
    token_type: string;
    expires_in: number;
    expires_at: number;
    refresh_token: string;
    user: User;
};

// const a = {
//     access_token:
//         "eyJhbGciOiJIUzI1NiIsImtpZCI6IldHUkxhS2xJdWRHdThncG0iLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2Rmb2pobmF1dmtjdGl2aHV0bXhvLnN1cGFiYXNlLmNvL2F1dGgvdjEiLCJzdWIiOiIxYzU4YzUyMy0yMGU3LTQyMDQtODk5Yi0xZjdhNDc0ZWY1NGEiLCJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNzUyOTIxNTA3LCJpYXQiOjE3NTI5MTc5MDcsImVtYWlsIjoia29rbzEwQG1haWxpbmF0b3IuY29tIiwicGhvbmUiOiIiLCJhcHBfbWV0YWRhdGEiOnsicHJvdmlkZXIiOiJlbWFpbCIsInByb3ZpZGVycyI6WyJlbWFpbCJdfSwidXNlcl9tZXRhZGF0YSI6eyJlbWFpbCI6Imtva28xMEBtYWlsaW5hdG9yLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJmdWxsX25hbWUiOiJDaW1lbmcgVG9rbyIsInBob25lX3ZlcmlmaWVkIjpmYWxzZSwic3ViIjoiMWM1OGM1MjMtMjBlNy00MjA0LTg5OWItMWY3YTQ3NGVmNTRhIn0sInJvbGUiOiJhdXRoZW50aWNhdGVkIiwiYWFsIjoiYWFsMSIsImFtciI6W3sibWV0aG9kIjoicGFzc3dvcmQiLCJ0aW1lc3RhbXAiOjE3NTI5MTc5MDd9XSwic2Vzc2lvbl9pZCI6IjIzOTk5MDRiLTM2M2UtNGY0YS05YTY1LTUzNjVmODhkNjU2YyIsImlzX2Fub255bW91cyI6ZmFsc2V9.qv509xQAkDl79y-VUbnlZLBDHW0tIQWncND_b4h7iac",
//     token_type: "bearer",
//     expires_in: 3600,
//     expires_at: 1752921507,
//     refresh_token: "f5rgnksbddqn",
//     user: {
//         id: "1c58c523-20e7-4204-899b-1f7a474ef54a",
//         aud: "authenticated",
//         role: "authenticated",
//         email: "koko10@mailinator.com",
//         email_confirmed_at: "2025-07-18T02:56:56.694153Z",
//         phone: "",
//         confirmed_at: "2025-07-18T02:56:56.694153Z",
//         last_sign_in_at: "2025-07-19T09:38:27.372319639Z",
//         app_metadata: { provider: "email", providers: ["email"] },
//         user_metadata: {
//             email: "koko10@mailinator.com",
//             email_verified: true,
//             full_name: "Cimeng Toko",
//             phone_verified: false,
//             sub: "1c58c523-20e7-4204-899b-1f7a474ef54a",
//         },
//         identities: [
//             {
//                 identity_id: "2184a0a3-eead-4e3c-8501-feb70b8f22a4",
//                 id: "1c58c523-20e7-4204-899b-1f7a474ef54a",
//                 user_id: "1c58c523-20e7-4204-899b-1f7a474ef54a",
//                 identity_data: {
//                     email: "koko10@mailinator.com",
//                     email_verified: false,
//                     full_name: "Cimeng Toko",
//                     phone_verified: false,
//                     sub: "1c58c523-20e7-4204-899b-1f7a474ef54a",
//                 },
//                 provider: "email",
//                 last_sign_in_at: "2025-07-18T02:56:56.687793Z",
//                 created_at: "2025-07-18T02:56:56.687838Z",
//                 updated_at: "2025-07-18T02:56:56.687838Z",
//                 email: "koko10@mailinator.com",
//             },
//         ],
//         created_at: "2025-07-18T02:56:56.678769Z",
//         updated_at: "2025-07-19T09:38:27.379446Z",
//         is_anonymous: false,
//     },
// };
