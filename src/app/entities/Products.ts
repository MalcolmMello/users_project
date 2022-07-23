import { Entity, Column, PrimaryColumn, ManyToOne, JoinColumn, OneToMany } from "typeorm";
import { v4 as uuid } from "uuid";
import { CategoryProduct } from "./CategoriesProducts";
import { Companies } from "./Companies";

@Entity("companies_products")
export class Products {
    @PrimaryColumn()
    id!: string;
    
    @Column()
    company_id!: string;

    @Column()
    categoryProductId!: string;

    @ManyToOne(() => Companies)
    @JoinColumn({ name: "company_id" })
    companies!: Companies; 

    @ManyToOne(type => CategoryProduct, products => Products)
    category_product!: CategoryProduct

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