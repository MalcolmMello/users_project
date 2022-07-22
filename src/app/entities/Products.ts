import { Entity, Column, PrimaryColumn, ManyToOne, JoinColumn, OneToMany } from "typeorm";
import { v4 as uuid } from "uuid";
import { CategoriesProducts } from "./CategoriesProducts";
import { Companies } from "./Companies";

@Entity("companies_products")
export class Products {
    @PrimaryColumn()
    id!: string;
    
    @Column()
    company_id!: string;

    @ManyToOne(() => Companies)
    @JoinColumn({ name: "company_id" })
    companies!: Companies; 

    @OneToMany(type => CategoriesProducts, products => Products)
    categories_products!: CategoriesProducts[]

    @Column()
    product_name!: string;

    @Column()
    description!: string;

    @Column()
    front_cover!: string;

    @Column()
    reviews!: number;

    @Column()
    price!: number;

    constructor() {
        if(!this.id) {
            this.id = uuid()
        }
    }
}