import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("produtos")

export class Medicamento {
  
  @PrimaryGeneratedColumn({ type: 'int'})
  id: number;

  @Column({ name: 'Nome', type: 'varchar'})
  nome: string;

  @Column({ name: 'Descrição', type: 'varchar'})
  descricao: string;

  @Column({ name: 'Preço', type: 'varchar'})
  preco: string;

  @Column({ name: 'Quantidade em Estoque', type: 'int'})
  estoque: number;

  @Column({ name: 'Data de Validade', type: 'varchar'})
  data_de_validade: string;

  @Column({ name: 'Unidade de Medida', type: 'varchar'})
  unidade_de_medida: string;  
}