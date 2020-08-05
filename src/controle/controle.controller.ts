import { Controller, Get } from '@nestjs/common';
import { ControleService } from './controle.service';

@Controller('controle')
export class ControleController {

  constructor(private readonly controle: ControleService) { }

  @Get(":id")
  findById(id: number) {
    return this.controle.findById(id);
  }

  async update(productId: number) {
    const controle = await this.findById(productId);
      controle.quantidadeEmEstoque =- 1;
        return this.controle.update(controle);
  }

}