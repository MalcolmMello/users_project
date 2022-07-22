import { Entity, Column, PrimaryColumn, ManyToOne, JoinColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { Products } from "./Products";

@Entity("categories")
export class CategoriesProducts {
    @PrimaryColumn()
    id!: string;
    
    @Column()
    category_name!: string;
    
    @ManyToOne(type => Products, categoriesproducts => CategoriesProducts)
    products!: Products; 

    constructor() {
        if(!this.id) {
            this.id = uuid()
        }
    }
}