import { User } from '../interfaces/user';

const users: User[] = [];

export const MyDatabaseModule = {
  add(user: User): void {
    users.push(user);
  },

  remove(index: number) {
    users.splice(index, 1);
  },

  show() {
    users.forEach((user) => console.log(user));
  },
};
