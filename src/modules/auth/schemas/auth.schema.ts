import { email, minLength, nonEmpty, object, pipe, string } from 'valibot';

export const LoginSchema = object({
  email: pipe(
    string('El correo debe ser un string'),
    nonEmpty('Por favor ingresar el correo'),
    email('El correo no tiene un formato permitido'),
  ),
  password: pipe(
    string('La contraseña debe ser un string'),
    nonEmpty('Por favor ingresar la contraseña'),
    minLength(5, 'La contraseña debe tener minimo 5 caracteres'),
  ),
});

export const RegisterSchema = object({
  name: pipe(
    string('El nombre debe ser un string'),
    nonEmpty('Por favor ingresar el nombre'),
    minLength(4, 'El nombre debe tener minimo 4 caracteres'),
  ),
  email: pipe(
    string('El correo debe ser un string'),
    nonEmpty('Por favor ingresar el correo'),
    email('El correo no tiene un formato permitido'),
  ),
  password: pipe(
    string('La contraseña debe ser un string'),
    nonEmpty('Por favor ingresar la contraseña'),
    minLength(5, 'La contraseña debe tener minimo 5 caracteres'),
  ),
  confirmPassword: pipe(
    string('Al confirma contraseña debe ser un string'),
    nonEmpty('Por favor ingresar la contraseña a confirmar'),
    minLength(5, 'Al confirma contraseña debe tener minimo 5 caracteres'),
  ),
});
