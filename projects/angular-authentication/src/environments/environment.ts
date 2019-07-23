import { environment } from 'src/environments/environment';

export const env = environment.production ? {
  production: true,
  apiUrl: 'https://gatz8ob7ck.execute-api.us-east-1.amazonaws.com/dev',
} : {
  production: false,
  apiUrl: 'http://localhost:3000',
};
