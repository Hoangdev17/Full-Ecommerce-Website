
import api from './api';

interface ILogin {
    message: string;
    success: boolean;
    user: {
      _id:string;
      name: string;
      
    }
    accessToken: string;
  }

export const login = (credentials: { email: string; password: string }) => {
    return  api.post<ILogin>('/auth/login', credentials);
};

export const signup =  (credential: {name: string; email: string; password: string}) => {
    return  api.post<ILogin>('/auth/register', credential);
}