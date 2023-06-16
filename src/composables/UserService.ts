import { UserModel } from '@/models/UserModel';
import axios from 'axios';

export function useUserService() {
  return {
    async register(userModel: UserModel): Promise<UserModel> {
      const login = userModel.login;
      const password = userModel.password;
      const birthYear = userModel.birthYear;

      const response = await axios.post<UserModel>('https://ponyracer.ninja-squad.com/api/users', { login, password, birthYear });
      return Promise.resolve(response.data);
    },

    async authenticate(credentials: { login: string; password: string }): Promise<UserModel> {
      const login = credentials.login;
      const password = credentials.password;

      const response = await axios.post<UserModel>('https://ponyracer.ninja-squad.com/api/users/authentication', { login, password });
      return response.data;
    }
  };
}
