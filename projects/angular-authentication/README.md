## angular-jwt-auth

## Use Auth Service

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

## AngularJwtAuthService methods
```javascript
public getAuthToken(): string {}

public setAuthToken(token: string): void {}

public removeToken(): void {}

public isTokenExpired(): boolean {}
```



## Protect route with AngularJwtAuthGuard 
```javascript
...
  {
    path: 'test',
    loadChildren: './test/test.module#TestModule',
    canActivate: [AngularJwtAuthGuard],
  },
```
