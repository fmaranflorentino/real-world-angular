export interface LoginResponse {
    token_type: string;
    scope: string;
    expires_in: string;
    ext_expires_in: string;
    expires_on: string;
    not_before: string;
    resource: string;
    access_token: string;
    refresh_token: string;
}