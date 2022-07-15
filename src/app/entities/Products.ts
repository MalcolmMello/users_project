import { Entity, Column, PrimaryColumn, ManyToOne, JoinColumn } from "typeorm";
import { v4 as uuid } from "uuid";
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

    @Column()
    product_name!: string;

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