import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Expenses {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    amount: number;

    @Column()
    name: string;
}