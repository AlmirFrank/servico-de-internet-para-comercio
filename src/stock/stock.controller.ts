import { Controller, Get } from '@nestjs/common';
import { StockService } from './stock.service';

@Controller('stock')
export class StockController {

  constructor(private readonly stock: StockService) { }

  @Get(":id")
  findById(id: number) {
    return this.stock.findById(id);

  }

  async update(productId: number) {
    const stock = await this.findById(productId);
      stock.quantityInStock =- 1;
        return this.stock.update(stock.quantityInStock);

  }

}
