# angular-auth-frontend

## Run develop

Steps: 
1. npm i
2. npm start

URL: http://localhost:4200

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