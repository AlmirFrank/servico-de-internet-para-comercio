import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Pedido } from "src/order/pedido.entity";

@Entity("clientes")

export class Cliente {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'Nome', type: 'varchar' })
  name: string;

  @Column({ name: 'CPF', type: 'varchar' })
  cpf: string;

  @Column({ name: 'Endereço', type: 'varchar' })
  address: string;

  @Column({ name: 'Bairro', type: 'varchar' })
  bairro: string;

  @Column({ name: 'Cidade', type: 'varchar' })
  city: string;

  @Column({ name: 'CEP', type: 'varchar' })
  cep: string;
  
  @OneToMany(type => Pedido, order => order.customer)
  orders: Pedido[];
  pedido: Cliente[];

}