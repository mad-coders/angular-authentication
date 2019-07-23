# angular-auth-frontend

## Run develop

Steps: 
1. npm i
2. npm start

URL: http://localhost:4200


## Add Auth Guard
```javascript
{
    path: 'test',
    loadChildren: './test/test.module#TestModule',
    canActivate: [MadcodersAngularJwtAuthGuard],
},
```


## Use AuthService

### 1. Import MadcodersAngularJwtAuthService into component
```javascript
constructor(...
            private authService: MadcodersAngularJwtAuthService,
            ...) {}
  ...
];
```

### 2. After success login set jwt token
```javascript
  this.authService.setAuthToken(data.token);
```
