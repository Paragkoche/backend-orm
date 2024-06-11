import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Todo {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({ default: "TIME()" })
    time: Date;

    @Column()
    completeOn: Date

    @Column()
    message: string


}