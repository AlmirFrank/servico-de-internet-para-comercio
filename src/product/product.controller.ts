import { Controller, Post, Get, Body, Put, Delete, Param } from '@nestjs/common';
import { ProductService } from './product.service';
import { Produto } from './produto.entity';

@Controller('product')
export class ProductController {

  constructor(private readonly product: ProductService) { }

  @Post()
  save(@Body() product: Produto) {
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

  @Put()
  update(@Body() product: Produto) {
    return this.product.update(product);

  }  

  @Delete(":id")
  remove(@Param() id: number) {
    return this.product.delete(id)

  }

}
