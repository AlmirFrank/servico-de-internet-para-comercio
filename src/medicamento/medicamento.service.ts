import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm/repository/Repository';
import { Medicamento } from './medicamento.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class MedicamentoService {

  constructor(
    @InjectRepository(Medicamento)
    private readonly repository: Repository<Medicamento>) {
    }

    save(medicamento: Medicamento) {
      return this.repository.save(medicamento);
    }

    delete(id: number) {
      return this.repository.delete(id);
    }

    findAll() {
      return this.repository.find();
    }

    findById(id: number) {
      return this.repository.findOne(id);     
    }

    update(medicamento: Medicamento) {
      return this.repository.update(medicamento.id, medicamento);
    }

}
