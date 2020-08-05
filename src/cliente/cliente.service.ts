import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm/repository/Repository';
import { Cliente } from './cliente.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ClienteService {

  constructor(
    @InjectRepository(Cliente)
    private readonly repository: Repository<Cliente>) {
    }

    save(cliente: Cliente) {
      return this.repository.save(cliente);
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

    update(cliente: Cliente) {
      return this.repository.update(cliente.id, cliente);
    }

}
