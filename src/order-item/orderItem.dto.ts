import { IsInt, IsString, MinLength, MaxLength } from "class-validator";
  
  export class OrderItemDto {

    id: number;

    @IsInt({ message: 'A quantidade inserida é inválida!' })
    @MinLength(1, { message: 'O campo quantidade deve ter no mínimo 2 dígitos' })
    @MaxLength(3, { message: 'O campo quantidade deve ter no máximo 8 dígitos' })
    quantity: number;

    @IsString({ message: 'O valor unitário é inválido!' })
    @MinLength(3, { message: 'O campo valor unitário deve ter no mínimo 3 dígitos' })
    @MaxLength(6, { message: 'O campo valor unitário deve ter no máximo 6 dígitos' })
    unitValue: string;

    @IsString({ message: 'O valor total inserido é inválido!' })
    @MinLength(3, { message: 'O campo valor total deve ter no mínimo 3 dígitos' })
    @MaxLength(6, { message: 'O campo valor total deve ter no máximo 6 dígitos' })
    totalValue: string;

  }