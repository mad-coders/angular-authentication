## angular-jwt-auth

## Use Auth Service

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

## MadcodersAngularJwtAuthService methods
```javascript
public getAuthToken(): string {}

public setAuthToken(token: string): void {}

public removeToken(): void {}

public isTokenExpired(): boolean {}
```



## Protect route with MadcodersAngularJwtAuthGuard 
```javascript
...
  {
    path: 'test',
    loadChildren: './test/test.module#TestModule',
    canActivate: [MadcodersAngularJwtAuthGuard],
  },
```
