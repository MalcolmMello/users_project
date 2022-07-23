import { Entity, Column, PrimaryColumn, OneToMany } from "typeorm";
import { v4 as uuid } from "uuid";
import { Products } from "./Products";

@Entity("categories_products")
export class CategoryProduct {
    @PrimaryColumn()
    id!: string;
    
    @Column()
    category_name!: string;

    @OneToMany(type => Products, categoryproduct => CategoryProduct)
    products!: Products[]

    constructor() {
        if(!this.id) {
            this.id = uuid()
        }
    }
}