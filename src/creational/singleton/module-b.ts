import { MyDatabaseClassic } from './db/my-database-classic';
import './module-a';

const db1 = MyDatabaseClassic.instance;

db1.add({
  name: 'Carlim',
  age: 20,
});
db1.add({
  name: 'Joaquina',
  age: 22,
});

db1.show();
