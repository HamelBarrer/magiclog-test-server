import {
  minLength,
  minValue,
  nonEmpty,
  number,
  object,
  pipe,
  string,
} from 'valibot';

export const CreateProductSchema = object({
  name: pipe(
    string('El nombre debe ser un string'),
    nonEmpty('Por favor ingresar el nombre'),
    minLength(4, 'El nombre debe tener minimo 4 caracteres'),
  ),
  sku: pipe(
    string('El sku debe ser un string'),
    nonEmpty('Por favor ingresar el sku'),
    minLength(4, 'El sku debe tener minimo 4 caracteres'),
  ),
  quantity: pipe(number('La cantidad debe ser un numero'), minValue(1)),
  price: pipe(number('El precio debe ser un numero'), minValue(1)),
  userId: pipe(number('El id del usuario debe ser un numero'), minValue(1)),
});
