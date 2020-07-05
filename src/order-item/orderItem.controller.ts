import { Controller, Post, Body, Get, Put, Delete, Param } from '@nestjs/common';
import { ItemPedido } from './itemPedido.entity'
import { OrderItemService } from './orderItem.service';
import { plainToClass } from "class-transformer";
import { OrderItemDto } from './orderItem.dto';

@Controller('orderItem')
export class OrderItemController {

  constructor(private readonly orderItem: OrderItemService) { }

  @Post()
  save(@Body() orderItemDto: OrderItemDto) {

    const orderItem = plainToClass(ItemPedido, orderItemDto)
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

  @Put(':id')
  update(@Param('id') id: number, @Body() orderItemDto: OrderItemDto) {
    orderItemDto.id = id;
    const orderItem = plainToClass(ItemPedido, orderItemDto);
      return this.orderItem.update(orderItem);

  }  

  @Delete(":id")
  remove(@Param() id: number) {
    return this.orderItem.delete(id);

  }

}
