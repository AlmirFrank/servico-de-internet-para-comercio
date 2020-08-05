import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("clientes")

export class Cliente {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'Nome', type: 'varchar'})
  nome: string;

  @Column({ name: 'CPF', type: 'varchar'})
  cpf: string;

  @Column({ name: 'RG', type: 'varchar'})
  rg: string;

  @Column({ name: 'Endereco', type: 'varchar'})
  endereco: string;

  @Column({ name: 'Bairro', type: 'varchar'})
  bairro: string;

  @Column({ name: 'Cidade', type: 'varchar'})
  cidade: string;

  @Column({ name: 'CEP', type: 'varchar'})
  cep: string;
}