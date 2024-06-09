//const _ = require("lodash");

import _ from "lodash" // прописать в .json --- "type": "module"

const users = [
    { user: 'fred',   age: 48 },
    { user: 'barney', age: 36 },
    { user: 'fred',   age: 40 },
    { user: 'barney', age: 34 }
];

var ans = _.sortBy(users, ['age']);
/* Вывод в консоль:
[
  { user: 'barney', age: 34 },
  { user: 'barney', age: 36 },
  { user: 'fred', age: 40 },
  { user: 'fred', age: 48 }
]*/

console.log(ans);

/* С помощью .json можнго запустить файл, прописав только npm run start
"scripts": {
    "start": "node index.js"
  },*/