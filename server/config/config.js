// =========================
// PUERTO
// =========================
process.env.PORT = process.env.PORT || 3000;

// =========================
// Entorno
// =========================
process.env.NODE_ENV = process.env.NODE_ENV || 'DEV';


// =========================
// Vencimiento del token
// =========================
// 60 seg * 60 min * 24 hs * 30 dias
process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;


// =========================
// SECRET SIGNATURE TOKEN
// =========================
process.env.SEED_TOKEN = process.env.SEED_TOKEN || 'este-es-el-seed-de-desarrollo';


// =========================
// Base de Datos
// =========================
let urlDB;
if (process.env.NODE_ENV === 'DEV') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = process.env.MONGO_URI;
}

process.env.URL_DB = urlDB;


// =========================
// Google Client ID
// =========================
process.env.CLIENT_ID = process.env.CLIENT_ID || '92246163627-hhsd7f2n27f33gjlf21mp7qi74hgdimq.apps.googleusercontent.com';