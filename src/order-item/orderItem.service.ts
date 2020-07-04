import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { ItemPedido } from './itemPedido.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class OrderItemService {

  constructor(
    @InjectRepository(ItemPedido)
    private readonly repository: Repository<ItemPedido>) {
      
    }

    save(itemPedido: ItemPedido) {
      return this.repository.save(itemPedido);

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

    update(itemPedido: ItemPedido) {
      return this.repository.findOne(itemPedido);

    }

}
