# angular-auth-frontend

## Run develop

Steps: 
1. npm i
2. npm start

URL: http://localhost:4200

## Auth configure

1. Route protection example
```
const routes: any[] = [
  {
    path: 'login',
    loadChildren: './login/login.module#LoginModule',
  },
  {
    path: 'test',
    loadChildren: './test/test.module#TestModule',
    canActivate: [AuthGuard],
  },
];
```
Route `test` is protected by token