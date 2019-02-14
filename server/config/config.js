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
    // urlDB = process.env.MONGO_URI;
    urlDB = 'mongodb://planas-m001-shard-00-00-kku06.mongodb.net:27017/cafe?ssl=true';
    // urlDB = 'mongodb://mgplanas:Pepito123@planas-m001-shard-00-00-kku06.mongodb.net:27017/cafe?ssl=true';
}

process.env.URL_DB = urlDB;