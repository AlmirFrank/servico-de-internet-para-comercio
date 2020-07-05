import { Controller, Post, Get, Body, Put, Delete, Param } from '@nestjs/common';
import { ProductService } from './product.service';
import { Produto } from './produto.entity';
import { plainToClass } from "class-transformer";
import { ProductDto } from './product.dto';

@Controller('product')
export class ProductController {

  constructor(private readonly product: ProductService) { }

  @Post()
  save(@Body() productDto: ProductDto) {

    const product = plainToClass(Produto, productDto)
    return this.product.save(product)

  }

  @Get()
  FindAll() {
    return this.product.findAll();

  }

  @Get(":id")
  FindById(id: number) {
    return this.product.findById(id);

  }

  @Put(':id')
  update(@Param('id') id: number, @Body() productDto: ProductDto) {
    productDto.id = id;
    const product = plainToClass(Produto, productDto)
      return this.product.update(product);

  }

  @Delete(":id")
  remove(@Param() id: number) {
    return this.product.delete(id)

  }

}
