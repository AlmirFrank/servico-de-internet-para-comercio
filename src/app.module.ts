import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomerController } from './customer/customer.controller';
import { CustomerService } from './customer/customer.service';
import { OrderController } from './order/order.controller';
import { OrderService } from './order/order.service';
import { OrderItemController } from './order-item/orderItem.controller';
import { OrderItemService } from './order-item/orderItem.service';
import { ProductController } from './product/product.controller';
import { ProductService } from './product/product.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cliente } from './customer/cliente.entity';
import { Pedido } from './order/pedido.entity';
import { ItemPedido } from './order-item/itemPedido.entity';
import { Produto } from './product/produto.entity';
import { StockController } from './stock/stock.controller';
import { StockService } from './stock/stock.service';
import { Stock } from './stock/stock.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'Aranha0600',
      database: 'atividade-web',
      entities: [
        Cliente,
        Pedido,
        ItemPedido,
        Produto,
        Stock,
      ],

      synchronize: true,
      logging: true,

    }),

    TypeOrmModule.forFeature([
      Cliente,
      Pedido,
      ItemPedido,
      Produto,
      Stock,
    ])

  ],
  
  controllers: [AppController, CustomerController, OrderController, ProductController, OrderItemController, StockController],
  providers: [AppService, CustomerService, OrderService, ProductService, OrderItemService, StockService],
})
export class AppModule {}
