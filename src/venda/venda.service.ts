import { Injectable } from '@nestjs/common';
import { Venda } from './venda.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class VendaService {

  constructor(
    @InjectRepository(Venda)
    private readonly repository: Repository<Venda>) {
    }

    save(venda: Venda) {
      return this.repository.save(venda);
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

    update(venda: Venda) {
      return this.repository.update(venda.id, venda);
    }

}
