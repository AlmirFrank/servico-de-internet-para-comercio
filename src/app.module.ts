import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cliente } from './cliente/cliente.entity';
import { ClienteController } from './cliente/cliente.controller';
import { ClienteService } from './cliente/cliente.service';
import { Medicamento } from './medicamento/medicamento.entity';
import { Venda } from './venda/venda.entity';
import { MedicamentoService } from './medicamento/medicamento.service';
import { MedicamentoController } from './medicamento/medicamento.controller';
import { VendaService } from './venda/venda.service';
import { VendaController } from './venda/venda.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '1234',
      database: 'atividade-web',
      entities: [
        Cliente,
        Medicamento,
        Venda,
      ],

      synchronize: true,
      logging: true,

    }),

    TypeOrmModule.forFeature([
      Cliente,
      Medicamento,
      Venda,
    ])

  ],
  
  controllers: [AppController, ClienteController, MedicamentoController, VendaController],
  providers: [AppService, ClienteService, MedicamentoService, VendaService],
})
export class AppModule {}
