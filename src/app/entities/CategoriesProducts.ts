import { Entity, Column, PrimaryColumn, ManyToOne } from "typeorm";
import { v4 as uuid } from "uuid";
import { Products } from "./Products";

@Entity("categories_products")
export class CategoryProduct {
    @PrimaryColumn()
    id!: string;
    
    @Column()
    category_name!: string;
    
    @ManyToOne(type => Products, categoriesproducts => CategoryProduct)
    products!: Products; 

    constructor() {
        if(!this.id) {
            this.id = uuid()
        }
    }
}