const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

let rolesValidos = {
    values: ['ADMIN_ROLE', 'USER_ROLE'],
    message: '{VALUE} no es un rol válido'
}
let Schema = mongoose.Schema;

var usuarioSchema = new Schema({
    nombre: { type: String, required: [true, 'El nombre es necesario'] },
    email: { type: String, required: [true, 'El correo es necesario'], unique: true },
    password: { type: String, required: [true, 'El password es necesario'] },
    img: { type: String, required: false },
    role: { type: String, required: true, default: 'USER_ROLE', enum: rolesValidos },
    google: { type: Boolean, default: false },
    estado: { type: Boolean, default: true }
});

// usuarioSchema.methods.toJSON = () => {
//     let user = this;
//     let userObject = user.toObject();
//     delete userObject.password;

//     return userObject;
// };

usuarioSchema.plugin(uniqueValidator, { message: 'El correo debe de ser único' });

module.exports = mongoose.model('Usuario', usuarioSchema);