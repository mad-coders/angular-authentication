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