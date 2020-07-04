import { IsString, MinLength, MaxLength, IsDate, IsInt } from "class-validator";
  
  export class OrderDto {

    @IsInt({ message: 'O código do pedido é inválido!' })
    @MinLength(2, { message: 'O campo código do pedido deve ter no mínimo 2 dígitos' })
    @MaxLength(8, { message: 'O campo código do pedido deve ter no máximo 8 dígitos' })
    code: number;

    @IsDate({ message: 'A data do pedido inserida é inválida!' })
    @MinLength(6, { message: 'O campo data do pedido deve ter no mínimo 6 dígitos' })
    @MaxLength(8, { message: 'O campo data do pedido deve ter no máximo 8 dígitos' })
    orderDate: Date;

    @IsDate({ message: 'A data de entrega inserida é inválida!' })
    @MinLength(6, { message: 'O campo data do pedido deve ter no mínimo 6 dígitos' })
    @MaxLength(8, { message: 'O campo data do pedido deve ter no máximo 8 dígitos' })
    deliveryDate: Date;

    @IsString({ message: 'O nome da transportadora inserido é inválido!' })
    transporter: string;

    @IsString({ message: 'O valor total inserido é inválido!' })
    @MinLength(3, { message: 'O campo valor total deve ter no mínimo 3 caracteres' })
    @MaxLength(6, { message: 'O campo valor total deve ter no máximo 6 caracteres' })
    total: string;

    @IsString({ message: 'O valor do produto inserido é inválido!' })
    @MinLength(3, { message: 'O campo valor do produto deve ter no mínimo 3 caracteres' })
    @MaxLength(6, { message: 'O campo valor do produto deve ter no máximo 6 caracteres' })
    valueOfProducts: string;

    @IsString({ message: 'O valor de descontos inserido é inválido!' })
    @MinLength(3, { message: 'O campo valor de descontos deve ter no mínimo 3 caracteres' })
    @MaxLength(6, { message: 'O campo valor de descontos deve ter no máximo 6 caracteres' })
    discountAmount:string;

    @IsString({ message: 'O endereço de entrega inserido é inválido!' })
    deliveryAddress: string;

  }