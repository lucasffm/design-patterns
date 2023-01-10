import { User } from '../interfaces/user';

export const MyDatabaseFunction = (function () {
  const users: User[] = [];

  return {
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
})();
