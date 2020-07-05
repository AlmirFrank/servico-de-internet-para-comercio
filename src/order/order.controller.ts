import { Controller, Post, Body, Get, Put, Delete, Param } from '@nestjs/common';
import { OrderService } from './order.service';
import { Pedido } from './pedido.entity';
import { plainToClass } from "class-transformer";
import { OrderDto } from './order.dto';

@Controller('order')
export class OrderController {

  constructor(private readonly order: OrderService) { }

  @Post()
  save(@Body() orderDto: OrderDto) {

    const order = plainToClass(Pedido, orderDto)
    return this.order.save(order)

  }

  @Get()
  FindAll() {
    return this.order.findAll();

  }

  @Get(":id")
  FindById(id: number) {
    return this.order.findById(id);

  }

  @Put(':id')
  update(@Param('id') id: number, @Body() orderDto: OrderDto) {
    orderDto.id = id;
    const order = plainToClass(Pedido, orderDto);
      return this.order.update(order);

  }  

  @Delete(":id")
  remove(@Param() id: number) {
    return this.order.delete(id);

  }

}
