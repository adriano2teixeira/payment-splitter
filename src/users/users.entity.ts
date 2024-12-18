import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ type: 'char' })
  name: string;

  @Column({ type: 'char', unique: true })
  email: string;
}
