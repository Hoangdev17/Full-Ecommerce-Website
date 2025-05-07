
import api from './api';

export const login = (credentials: { email: string; password: string }) => {
    return  api.post('/auth/login', credentials);
};

export const signup =  (credential: {name: string; email: string; password: string}) => {
    return  api.post('/auth/register', credential);
}