const { body } = require('express-validator');

const validations = [
    body('name').notEmpty().withMessage('Debes completar el nombre'),
    body('age').isInt().withMessage('La edad ingresada debe ser un número entero'),
    body('color').notEmpty().withMessage('Debes seleccionar un color'),
    body('email').notEmpty().withMessage('Debes completar el email').bail()
        .isEmail().withMessage('El formato del email es incorrecto'),
]

module.exports = validations