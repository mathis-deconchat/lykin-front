
export const AwsConfigAuth = {
    region: import.meta.env.VITE_AUTH_REGION,
    userPoolId: import.meta.env.VITE_AUTH_USER_POOL_ID,
    userPoolWebClientId: import.meta.env.VITE_AUTH_USER_POOL_WEB_CLIENT_ID,
    oauth: {
        domain: "lykin.auth.eu-west-3.amazoncognito.com",
        redirectSignIn: "http://localhost:5173",
        redirectSignOut: "http://localhost:5173",
        // responseType: "code",


    }
};