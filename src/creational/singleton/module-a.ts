import { MyDatabaseClassic } from './db/my-database-classic';

const db1 = MyDatabaseClassic.instance;

db1.add({
  name: 'João',
  age: 20,
});
db1.add({
  name: 'Maria',
  age: 22,
});

db1.show();
