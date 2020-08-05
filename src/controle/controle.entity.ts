import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("medicamento")

export class Controle { 

  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;
 
  @Column({ name: 'Quantidade em estoque', type: 'int' })
  quantidadeEmEstoque: number;
}