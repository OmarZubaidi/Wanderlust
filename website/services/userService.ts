import { User } from '../types/user.type';

const serverUrl = process.env.SERVER_URL || 'http://localhost:3333';

export const userServiceCreate = async (user: User) => {
  try {
    const res = await fetch(serverUrl + '/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });
    const newUser = await res.json();
    return newUser;
  } catch (error: any) {
    console.log(error.message);
    return false;
  }
};

export const userServiceGetByEmail = async (email: string) => {
  try {
    const res = await fetch(serverUrl + `/users/email/${email}`);
    const user = await res.json();
    return user;
  } catch (error: any) {
    console.log(error.message);
    return false;
  }
};
