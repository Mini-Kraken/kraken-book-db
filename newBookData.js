// const fs = require("fs");
// const df = require("danfojs");

window.addEventListener("load", loaded);
const db = openDatabase("database", "1.0", "sqlite", 2 * 1024 * 1024); //abrir database local

const save_book = document.querySelector("#save_newbook");

//criar uma table se nao existir
db.transaction(function (tx) {
  tx.executeSql(
    "CREATE TABLE IF NOT EXISTS tableBooks ( titulo TEXT, autor TEXT, isbn TEXT, editora TEXT, genero TEXT, pratileira TEXT, tags TEXT)"
  );
});

function loaded() {
  save_book.addEventListener("click", save);
}

function save() {
  const titulo = document.querySelector("#title"),
    autor = document.querySelector("#autor"),
    isbn = document.querySelector("#ISBN"),
    editora = document.querySelector("#editora"),
    genero = document.querySelector("#genero"),
    pratileira = document.querySelector("#pratileira"),
    tags = document.querySelector("#tags");

  //adiciona os livros na table do banco de dados
  db.transaction(function (tx) {
    tx.executeSql(
      "INSERT INTO tableBooks (titulo, autor, isbn, editora, genero, pratileira, tags) VALUES(?,?,?,?,?,?,?)",
      [titulo.value, autor.value, isbn.value, editora.value, genero.value, pratileira.value, tags.value],
      function (tx, result) {
        console.log("Registro inserido com sucesso!");
      },
      function (tx, error) {
        console.log("Erro na inserção do registro: " + error.message);
      }
    );
    titulo.value = ""
    autor.value = ""
    isbn.value = ""
    editora.value = ""
    genero.value = ""
    pratileira.value = ""
    tags.value = ""
  });
}
