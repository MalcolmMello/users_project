import { Entity, Column, PrimaryColumn, ManyToMany, JoinTable, OneToMany } from "typeorm";
import { v4 as uuid } from "uuid";
import { Categories } from "./Categories";
import { CategoryProduct } from "./CategoriesProducts";

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

    @ManyToMany(type => Categories, { eager: true })
    @JoinTable()
    categories!: Categories[];

    @Column()
    logo!: string;

    @Column()
    cover!: string;

    constructor() {
        if(!this.id) {
            this.id = uuid();
        }
    }
}