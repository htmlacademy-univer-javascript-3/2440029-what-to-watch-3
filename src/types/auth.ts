export type AuthResponse = {
    'name': string;
    'avatarUrl': string;
    'email': string;
    'token': string;
};

export type AuthStatusResponse = {
    isAuthorized: boolean;
    content?: AuthResponse;
};

export enum AuthStatus {
    AUTHENTICATED = 'Authenticated',
    NOT_AUTHENTICATED = 'notAuthenticated',
    PENDING = 'pending',
}
