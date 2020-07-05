import { IsString, IsInt, MinLength, MaxLength } from "class-validator";
  
  export class ProductDto {

    id: number;

    @IsString({ message: 'O nome inserido é inválido!' })
    @MinLength(4, { message: 'O campo nome deve ter no mínimo 4 caracteres' })
    @MaxLength(30, { message: 'O campo nome deve ter no máximo 30 caracteres' })
    name: string;

    @IsString({ message: 'A descrição inserida é inválida!' })
    @MinLength(10, { message: 'O campo descrição deve ter no mínimo 10 caracteres' })
    @MaxLength(200, { message: 'O campo descrição deve ter no máximo 200 caracteres' })
    description: string;

    @IsString({ message: 'O preço inserido é inválido!' })
    @MinLength(3, { message: 'O campo preço deve ter no mínimo 3 dígitos' })
    @MaxLength(8, { message: 'O campo preço deve ter no máximo 8 dígitos' })
    price: string;

    @IsInt({ message: 'O quantidade inserida é inválida!' })
    @MinLength(1, { message: 'O campo quantidade em Estoque deve ter no mínimo 1 dígito' })
    @MaxLength(4, { message: 'O campo quantidade em Estoque deve ter no máximo 4 dígitos' })
    stockQuantity: number;

    @IsString({ message: 'A data de validade inserida é inválida!' })
    @MinLength(8, { message: 'O campo data de validade deve ter no mínimo 8 caracteres' })
    expirationDate: string;

    @IsString({ message: 'A unidade de medida inserida é inválida!' })
    @MinLength(2, { message: 'O campo unidade de medida deve ter no mínimo 2 dígitos' })
    @MaxLength(4, { message: 'O campo unidade de medida deve ter no máximo 4 dígitos' })
    unity: string;

  }