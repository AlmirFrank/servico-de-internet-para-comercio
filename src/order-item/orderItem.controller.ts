import { Controller, Post, Body, Get, Put, Delete, Param } from '@nestjs/common';
import { ItemPedido } from './itemPedido.entity'
import { OrderItemService } from './orderItem.service';

@Controller('orderItem')
export class OrderItemController {

  constructor(private readonly orderItem: OrderItemService) { }

  @Post()
  save(@Body() orderItem: ItemPedido) {
    return this.orderItem.save(orderItem)
  }

  @Get()
  FindAll() {
    return this.orderItem.findAll();

  }

  @Get(":id")
  FindById(id: number) {
    return this.orderItem.findById(id);

  }

  @Put()
  update(@Body() orderItem: ItemPedido) {
    return this.orderItem.update(orderItem);

  }  

  @Delete(":id")
  remove(@Param() id: number) {
    return this.orderItem.delete(id);

  }

}
