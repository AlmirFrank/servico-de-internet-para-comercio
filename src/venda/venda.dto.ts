import { IsString, MinLength, MaxLength, IsDate, IsInt } from "class-validator";
  
  export class VendaDto {

    id: number;

    @IsInt({ message: 'O código do pedido é inválido!'})
    @MinLength(2, { message: 'O campo código do pedido deve ter no mínimo 2 dígitos'})
    @MaxLength(8, { message: 'O campo código do pedido deve ter no máximo 8 dígitos'})
    codigo: number;

    @IsDate({ message: 'A data do pedido inserida é inválida!'})
    @MinLength(6, { message: 'O campo data do pedido deve ter no mínimo 6 dígitos'})
    @MaxLength(8, { message: 'O campo data do pedido deve ter no máximo 8 dígitos'})
    data: Date;

    @IsString({ message: 'O valor total inserido é inválido!'})
    @MinLength(3, { message: 'O campo valor total deve ter no mínimo 3 caracteres'})
    @MaxLength(6, { message: 'O campo valor total deve ter no máximo 6 caracteres'})
    valor_total: string;

    @IsString({ message: 'O valor do produto inserido é inválido!'})
    @MinLength(3, { message: 'O campo valor do produto deve ter no mínimo 3 caracteres'})
    @MaxLength(6, { message: 'O campo valor do produto deve ter no máximo 6 caracteres'})
    valor_dos_produtos: string;

    @IsString({ message: 'O valor de descontos inserido é inválido!'})
    @MinLength(3, { message: 'O campo valor de descontos deve ter no mínimo 3 caracteres'})
    @MaxLength(6, { message: 'O campo valor de descontos deve ter no máximo 6 caracteres'})
    valor_de_descontos:string;

    @IsString({ message: 'O cliente inserido é inválido ou não existe!'})
    @MinLength(3, { message: 'O campo cliente deve ter no mínimo 3 caracteres'})
    @MaxLength(20, { message: 'O campo cliente deve ter no máximo 20 caracteres'})
    cliente: string;
  }