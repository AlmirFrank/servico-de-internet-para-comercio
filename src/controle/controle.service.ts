import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Controle } from './controle.entity';
import { Repository } from 'typeorm';
import { Medicamento } from '../medicamento/medicamento.entity';

@Injectable()
export class ControleService {

  private readonly medicamentoReplacement: Repository<Medicamento>

  constructor(
    @InjectRepository(Controle)
    private readonly repository: Repository<Controle>) {
    }

    findById(id: number) {
      const medicamento = this.medicamentoReplacement.findOne(id);
      {medicamento: medicamento}
        return this.repository.findOne(id);    
    }

    update(controle: Controle) {
      return this.repository.update(controle.id, controle);
    }
    
}