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
    canActivate: [AngularJwtAuthGuard],
},
```


## Use AuthService

### 1. Import AngularJwtAuthService into component
```javascript
constructor(...
            private authService: AngularJwtAuthService,
            ...) {}
  ...
];
```

### 2. After success login set jwt token
```javascript
  this.authService.setAuthToken(data.token);
```
