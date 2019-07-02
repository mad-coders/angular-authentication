# angular-auth-frontend

## Run develop

Steps: 
1. npm i
2. npm start

URL: http://localhost:4200

## Add login module at exist project
```javascript
const routes: any[] = [
  ...
  {
    path: 'login',
    loadChildren: 'projects/madcoders-angular-jwt-auth/src/public-api#MadcodersAngularJwtAuthModule',
  },
  ...
];
```