import { Entity, Column, CreateDateColumn, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("users")
export class User {
    @PrimaryColumn()
    id!: string;
    
    @Column()
    username!: string;

    @Column()
    email!: string;

    @Column()
    password!: string;

    @Column()
    phone_number!: string;

    @CreateDateColumn()
    created_at!: string;

    constructor() {
        if(!this.id) {
            this.id = uuid()
        }
    }
}