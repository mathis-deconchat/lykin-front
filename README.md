# Lykin, the new finance app
This app (a mix between Lydia and Bankin') aim to help you to manage your money. It's a simple app, with a simple goal: help you to manage your money.

## Features
- [x] Create groups
- [x] Add users to a group
- [x] Add transactions to a group
- [x] See the balance of a group
- [ ] See the balance of a user
- [ ] Show users in a group
- [ ] Dark/Light mode 

## Installation
### Requirements
- [Node.js](https://nodejs.org/en/)

### Steps
1. Clone the repository
2. Install dependencies
```bash
npm install
```
4. Create a `.env.local` file in the root of the project
5. Add the following variables to the `.env.local` file from cognito
```bash
VITE_AUTH_REGION=xxx
VITE_AUTH_USER_POOL_WEB_CLIENT_ID=xxx
VITE_AUTH_USER_POOL_ID=xxx
```
5. Run the app
```bash
npm run dev
```

## Folder strucure and good practices 
### Folder structure
`assets` -> Images, icons, etc.  
`components` -> Reusable components  
`layout` -> Layouts  (e.g. `DefaultLayout` or `HomeLayout`)  
`pages` -> Pages (e.g. `Home` or `Login`)  
`services` -> Utils Services (e.g. `router` )  
`contexts` -> Contexts of the application (e.g. `AuthContext`)  
`hooks` -> Custom hooks (e.g. `useAuth`)  
`shared` -> Shared configs 
`graphql` -> GraphQL queries and mutations in raw format
`generated` -> Generated GraphQL queries and mutations

### Good practices
- Use `camelCase` for variables and functions

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.







