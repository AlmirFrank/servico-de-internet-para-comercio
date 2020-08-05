import { Controller, Post, Body, Get, Put, Delete, Param } from '@nestjs/common';
import { VendaService } from './venda.service';
import { Venda } from './venda.entity';
import { plainToClass } from "class-transformer";
import { VendaDto } from './venda.dto';

@Controller('venda')
export class VendaController {

  constructor(private readonly venda: VendaService) { }

  @Post()
  save(@Body() vendaDto: VendaDto) {

    const venda = plainToClass(Venda, vendaDto)
    return this.venda.save(venda)
  }

  @Get()
  FindAll() {
    return this.venda.findAll();
  }

  @Get(":id")
  FindById(id: number) {
    return this.venda.findById(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() vendaDto: VendaDto) {
    vendaDto.id = id;
    const venda = plainToClass(Venda, vendaDto);
      return this.venda.update(venda);
  }  

  @Delete(":id")
  remove(@Param() id: number) {
    return this.venda.delete(id);
  }

}
