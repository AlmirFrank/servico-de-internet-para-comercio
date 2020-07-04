import { Entity, ManyToOne, PrimaryGeneratedColumn, Column } from "typeorm";
import { Cliente } from "src/customer/cliente.entity";

@Entity("pedidos")

export class Pedido {
  
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'Código', type: 'int' })
  code: number;

  @Column({ name: 'Data do Pedido', type: 'date' })
  orderDate: Date;

  @Column({ name: 'Data de Entrega', type: 'date' })
  deliveryDate: Date;

  @Column({ name: 'Transportadora', type: 'varchar' })
  transporter: string;

  @Column({ name: 'Valor Total', type: 'varchar' })
  total: string;

  @Column({ name: 'Valor dos Produtos', type: 'varchar' })
  valueOfProducts: string;

  @Column({ name: 'Valor de Descontos', type: 'varchar' })
  discountAmount: string;

  @ManyToOne(type => Cliente, customer => customer.pedido)
  customer: Cliente[];

  @Column({ name: 'Endereço de Entrega', type: 'varchar' })
  deliveryAddress: string;

  

}