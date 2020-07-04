import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("produtos")

export class Stock { 

  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;
 
  @Column({ name: 'Quantidade em estoque', type: 'int' })
  quantityInStock: number;
  
}