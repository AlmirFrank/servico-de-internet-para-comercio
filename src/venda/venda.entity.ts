import { Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity("vendas")

export class Venda {
  
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'Código', type: 'int'})
  codigo: number;

  @Column({ name: 'Data do Pedido', type: 'date'})
  data: Date;

  @Column({ name: 'Valor Total', type: 'varchar'})
  valor_total: string;

  @Column({ name: 'Valor dos Produtos', type: 'varchar'})
  valor_dos_produtos: string;

  @Column({ name: 'Valor de Descontos', type: 'varchar'})
  valor_de_descontos: string;

  @Column({ name: 'Cliente', type: 'varchar'})
  cliente: string;
}