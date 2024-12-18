import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ExpenseGroup {
    @PrimaryGeneratedColumn()
    id: string;

    @Column({ type: "char" })
    name: string;

    @Column()
    members: any[]
}