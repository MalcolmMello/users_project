import { Entity, Column, PrimaryColumn, OneToMany, JoinColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { Products } from "./Products";

@Entity("companies")
export class Companies {
    @PrimaryColumn()
    id!: string;
    
    @Column()
    company_name!: string;

    @Column()
    email!: string;

    @Column()
    password!: string;

    @Column()
    phone_number!: string;

    @Column()
    logo!: string;

    @Column()
    cover!: string;

    constructor() {
        if(!this.id) {
            this.id = uuid()
        }
    }
}