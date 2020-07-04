import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Stock } from './stock.entity';
import { Repository } from 'typeorm';

@Injectable()
export class StockService {

  constructor(
    @InjectRepository(Stock)
    private readonly repository: Repository<Stock>) {

    }

    findById(id: number) {
      return this.repository.findOne(id);
      
    }

    update(id: number) {
      return this.repository.findOne(id);

    }
    
}
