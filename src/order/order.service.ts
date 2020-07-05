import { Injectable } from '@nestjs/common';
import { Pedido } from './pedido.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class OrderService {

  constructor(
    @InjectRepository(Pedido)
    private readonly repository: Repository<Pedido>) {

    }

    save(pedido: Pedido) {
      return this.repository.save(pedido);

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

    update(pedido: Pedido) {
      return this.repository.update(pedido.id, pedido);

    }

}
