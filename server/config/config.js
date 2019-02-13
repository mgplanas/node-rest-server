// =========================
// PUERTO
// =========================
process.env.PORT = process.env.PORT || 3000;

// =========================
// Entorno
// =========================
process.env.NODE_ENV = process.env.NODE_ENV || 'DEV';

// =========================
// Base de Datos
// =========================
let urlDB;
if (process.env.NODE_ENV === 'DEV') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = 'mongodb://mgplanas:Pepito123@planas-m001-shard-00-00-kku06.mongodb.net:27017,planas-m001-shard-00-01-kku06.mongodb.net:27017,planas-m001-shard-00-02-kku06.mongodb.net:27017/test?ssl=true&replicaSet=planas-m001-shard-0&authSource=admin&retryWrites=true';
}

process.env.URL_DB = urlDB;