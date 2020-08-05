import { Controller, Post, Body, Get, Put, Delete, Param } from '@nestjs/common';
import { ClienteService } from './cliente.service';
import { Cliente } from './cliente.entity';
import { plainToClass } from "class-transformer";
import { ClienteDto } from './cliente.dto';

@Controller('cliente')
export class ClienteController {

  constructor(private readonly cliente: ClienteService) { }
  
  @Post()
  save(@Body() clienteDto: ClienteDto) {

    const cliente = plainToClass(Cliente, clienteDto)
    return this.cliente.save(cliente);  
  }
  
  @Get()
  findAll() {
    return this.cliente.findAll();
  }

  @Get(":id")
  findById(@Param('id') id: number) {
    return this.cliente.findById(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() clienteDto: ClienteDto) {
    clienteDto.id = id;
    const cliente = plainToClass(Cliente, clienteDto);
      return this.cliente.update(cliente);
  }  

  @Delete(":id")
  remove(@Param() id: number) {
    return this.cliente.delete(id);
  }
  
}
