import { body } from 'express-validator'

export const createUserSchema = [
  body('username')
    .exists()
    .notEmpty().withMessage('El username no debe estar vacío.')
    .isString().withMessage('El username debe ser un string.'),
  body('password')
    .exists()
    .notEmpty()
    .isString()
    .isStrongPassword({
      minLength: 8,
      minNumbers: 1
    }),
  body('email')
    .exists()
    .notEmpty()
    .isEmail()
]

export const loginUserSchema = [
  body('email')
    .exists()
    .notEmpty()
    .isEmail(),
  body('password')
    .exists()
    .notEmpty()
    .isString()
]
