## angular-jwt-auth

## Import module into app.module.ts
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

## Protect route with guard 
```javascript
...
  {
    path: 'test',
    loadChildren: './test/test.module#TestModule',
    canActivate: [MadcodersAngularJwtAuthGuard],
  },
```

## Inject madcoders-angular-jwt-auth.service for methods
```javascript
public getAuthToken(): string {}

public setAuthToken(token: string): void {}

public removeToken(): void {}
```