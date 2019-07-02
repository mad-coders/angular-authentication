## angular-jwt-auth

## Import MadcodersAngularJwtAuthModule into app.module.ts
```javascript
@NgModule({
  ...
  imports: [
    ...
    MadcodersAngularJwtAuthModule,
  ],
  ...
})
export class AppModule { }
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

## Inject MadcodersAngularJwtAuthService for methods
```javascript
public getAuthToken(): string {}

public setAuthToken(token: string): void {}

public removeToken(): void {}
```
MadcodersAngularJwtAuthService use apiUrl that stored at project environment

Example:
```javascript
export const environment = {
  production: true,
  apiUrl: 'https://23781gifif.execute-api.us-east-1.amazonaws.com/production',
};
```