import { Entity, ManyToOne, PrimaryGeneratedColumn, Column, JoinColumn } from "typeorm";
import { Produto } from "src/product/produto.entity";
import { Pedido } from "src/order/pedido.entity";

@Entity("itens")

export class ItemPedido {
  
  @PrimaryGeneratedColumn()
  id: number;
  
  @ManyToOne(type => Produto, product => product)
  @JoinColumn({ name: 'produto_id'})
  product: Produto;
  
  @ManyToOne(type => Pedido, order => order)
  @JoinColumn({ name: 'pedido_id'})
  order: Pedido;
  
  @Column({ name: 'Quantidade', type: 'int' })
  quantity: number;
  
  @Column({ name: 'Valor Unitário', type: 'varchar' })
  unitValue: string;
  
  @Column({ name: 'Valor Total', type: 'varchar' })
  totalValue: string;

}