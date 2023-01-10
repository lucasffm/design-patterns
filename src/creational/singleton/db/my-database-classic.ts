import { User } from '../interfaces/user';

export class MyDatabaseClassic {
  private static _instance: MyDatabaseClassic | null = null;
  private users: User[] = [];
  private constructor() {}

  static get instance(): MyDatabaseClassic {
    if (!MyDatabaseClassic._instance) {
      MyDatabaseClassic._instance = new MyDatabaseClassic();
    }
    return MyDatabaseClassic._instance;
  }

  add(user: User): void {
    this.users.push(user);
  }

  remove(index: number) {
    this.users.splice(index, 1);
  }

  show() {
    this.users.forEach((user) => console.log(user));
  }
}
