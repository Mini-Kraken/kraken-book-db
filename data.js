// const fs = require("fs");
// const df = require("danfojs");

const db = openDatabase("database", "1.0", "sqlite", 2 * 1024 * 1024); //abrir database local

//criar uma table se nao existir
db.transaction(function (tx) {
  tx.executeSql(
    "CREATE TABLE IF NOT EXISTS tableBooks ( titulo TEXT, autor TEXT, isbn TEXT, editora TEXT, genero TEXT, pratileira TEXT, tags TEXT)"
  );
});