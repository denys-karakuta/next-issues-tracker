export const ROUTES = {
    ISSUES_CREATE: 'issues/create',
    ISSUES_LIST: 'issues/list',
    ISSUES_EDIT: 'issues/edit',
    ISSUES_VIEW: 'issues/view',
    ISSUES: 'issues',
    DASHBOARD: '/',
    DEFAULT: '/',
};

export const NAVIGATION = [
    { label: 'Dashboard', href: `${ROUTES.DASHBOARD}` },
    { label: 'Issues', href: `/${ROUTES.ISSUES_LIST}` },
];

export const API_AUTH_ROUTES = {
    LOGOUT: '/api/v1/auth/signout',
    LOGIN: '/api/v1/auth/signin',
};
