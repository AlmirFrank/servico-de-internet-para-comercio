import { Controller, Post, Body, Get, Put, Delete, Param } from '@nestjs/common';
import { plainToClass } from "class-transformer";
import { MedicamentoDto } from './medicamento.dto';
import { Medicamento } from './medicamento.entity';
import { MedicamentoService } from './medicamento.service';

@Controller('medicamento')
export class MedicamentoController {

  constructor(private readonly medicamento: MedicamentoService) { }
  
  @Post()
  save(@Body() medicamentoDto: MedicamentoDto) {

    const medicamento = plainToClass(Medicamento, medicamentoDto)
    return this.medicamento.save(medicamento); 
  }
  
  @Get()
  findAll() {
    return this.medicamento.findAll();
  }

  @Get(":id")
  findById(@Param('id') id: number) {
    return this.medicamento.findById(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() medicamentoDto: MedicamentoDto) {
    medicamentoDto.id = id;
    const medicamento = plainToClass(Medicamento, medicamentoDto);
      return this.medicamento.update(medicamento);
  }  

  @Delete(":id")
  remove(@Param() id: number) {
    return this.medicamento.delete(id);
  }
  
}
