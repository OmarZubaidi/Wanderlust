import { userServiceCreate, userServiceGetByEmail } from './userService';

const createUser = userServiceCreate;
const getUserByEmail = userServiceGetByEmail;

export { createUser, getUserByEmail };
