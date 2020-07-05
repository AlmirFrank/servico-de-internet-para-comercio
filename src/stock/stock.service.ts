import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Stock } from './stock.entity';
import { Repository } from 'typeorm';
import { Produto } from '../product/produto.entity';

@Injectable()
export class StockService {

  private readonly productReplacement: Repository<Produto>

  constructor(
    @InjectRepository(Stock)
    private readonly repository: Repository<Stock>) {

    }

    findById(id: number) {
      const product = this.productReplacement.findOne(id);
      {product: product}
        return this.repository.findOne(id);
      
    }

    update(stock: Stock) {
      return this.repository.update(stock.id, stock);

    }
    
}
